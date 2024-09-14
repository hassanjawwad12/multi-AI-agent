import { VStack, Text, Flex, HStack, Button, Input } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import ModalBox from "../../Modal";

const API_URL = import.meta.env.VITE_API_URL;

const ChatBot = ({ id }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const descriptions = [
    {
      id: 18,
      description:
        "AI companion for solving mysteries and puzzles, offering clues, challenges, and a captivating storyline.",
    },
    {
      id: 19,
      description:
        "AI time traveler that takes users on interactive journeys to historical events or futuristic scenarios, making learning fun.",
    },
  ];

  const getAIAnswerApi = async (messages) => {
    try {
      if (id === 18) {
        const response = await axios.post(`${API_URL}mysterySolverAIBot`, {
          query: messages[messages.length - 1].query,
          messages: messages.map((msg) => ({
            query: msg.query,
            response: msg.response,
          })),
        });
        return response.data;
      } else if (id === 19) {
        const response = await axios.post(`${API_URL}timeTravelerAIBot`, {
          query: messages[messages.length - 1].query,
          messages: messages.map((msg) => ({
            query: msg.query,
            response: msg.response,
          })),
        });
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error generating AI answer:",
          error.response?.data || error.request || error.message
        );
      } else {
        console.error("Error generating AI answer:", error);
      }
      throw error;
    }
  };

  const handleSendClick = async () => {
    if (!inputValue) return; // Do nothing if inputValue is empty

    const newMessage = { query: inputValue, role: "user" };
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, newMessage];
      getAIResponse(updatedMessages);
      return updatedMessages;
    });

    setInputValue("");
  };

  const getAIResponse = async (messages) => {
    try {
      setIsLoading(true);

      const formattedMessages = messages.map((msg) => ({
        query: msg.query,
        response: "",
      }));

      const response = await getAIAnswerApi(formattedMessages);

      const updatedMessages = messages.map((msg, index) => ({
        ...msg,
        response: response[index].response,
      }));

      const newAssistantMessage = { query: response, role: "assistant" };
      setMessages((prevMessages) => [...prevMessages, newAssistantMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack
      width={"100%"}
      bg={"black"}
      padding={"4"}
      h={["92vh", "92vh", "100vh", "100vh"]}
    >
      <VStack
        border={"1px solid #4D4D4D"}
        borderRadius="2xl"
        p={6}
        gap={6}
        h={"full"}
        w={"full"}
        align="flex-start"
        zIndex={4}
        bg="rgba(22, 22, 22, 0.6)"
        backdropFilter={"blur(25px)"}
      >
        <HStack width={"100%"} spacing={"4"}>
          <Text
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"white"}
            letterSpacing={".2rem"}
            textTransform={"uppercase"}
          >
            {id === 18
              ? "Mystery Solver AI "
              : id === 19
              ? "Time Traveler AI "
              : null}
          </Text>
          <ModalBox
            description={
              descriptions.find((desc) => desc.id === id).description
            }
          />
        </HStack>
        <VStack
          width="100%"
          overflowY="auto"
          height={["68vh", "68vh", "75vh", "72vh"]}
        >
          {messages.map((message, index) => (
            <Flex
              width={"100%"}
              px={4}
              py={2}
              key={index}
              direction={message.role === "assistant" ? "row" : "row-reverse"} // Reverse the direction if it's from the assistant
            >
              <HStack
                bg={message.role === "assistant" ? "#DFD602" : "#2C2C2C"}
                rounded={"2xl"}
                px={3}
                py={3}
                border={"1px solid  #626262"}
                align={"center"}
                ml={message.role === "assistant" ? 2 : 0}
                mr={message.role === "user" ? 2 : 0}
              >
                <Text
                  fontSize={["sm", "md"]}
                  pr={2}
                  pl={2}
                  color={
                    message.role === "user"
                      ? "whiteAlpha.800"
                      : "blackAlpha.900"
                  }
                >
                  {message.query}
                </Text>
              </HStack>
            </Flex>
          ))}
        </VStack>
        <HStack
          width={"95%"}
          position={"absolute"}
          bottom={0}
          alignSelf={"center"}
          align={"center"}
          justifyContent={"center"}
          px={4}
          py={3}
          borderTop={"1px solid #6082B6"}
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isLoading === false) {
                handleSendClick();
              }
            }}
            placeholder={
              id === 18
                ? "Write the kind of mystery you want to create with difficulty level"
                : "In a world where a mysterious artifact allows users to quantum leap through time, a team of scientists must race against temporal chaos to prevent a cataclysmic paradox."
            }
            fontWeight="regular"
            fontSize={["md", "xl"]}
            w={["100%", "90%"]}
            border="none"
            outline={"none"}
            textColor={"white"}
            color={"white"}
            _focus={{
              outline: "none",
              borderColor: "transparent",
            }}
          />
          <Button
            bg="#DFD602"
            color="#005997"
            fontWeight="bold"
            fontSize={["md", "lg"]}
            borderRadius="18px"
            px={["4", "6"]}
            height={["60px", "62px"]}
            isLoading={isLoading}
            spinner={<BeatLoader size={8} color="white" />}
            onClick={handleSendClick}
            disabled={isLoading}
          >
            Send
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ChatBot;
