import React from "react";
import { VStack, Text, Flex, HStack, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import ModalBox from "../../Modal";

const API_URL = import.meta.env.VITE_API_URL;

const Pdfchat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uuid, setUuid] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const descriptions = [
    {
      id: 20,
      description:
        "AI Chatbot that extracts answers of your queries from the text in the PDF.",
    },
  ];

  const uploadPdf = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true);

    try {
      console.log("Uploading PDF...");
      const response = await axios.post(`${API_URL}upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUuid(response.data.assistant_id);
      console.log("Response:", response.data);

      // Show success toast
      toast({
        title: "Success",
        description: "PDF uploaded successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);

      setTimeout(() => {
        setUploaded(true);
      }, 5000);
    } catch (error) {
      console.error("Error uploading PDF:", error);
      // Handle error
      toast({
        title: "Error",
        description: "Failed to upload PDF.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const Uploading = () => {
    setUploaded(true);
  };

  const handleSendClick = async () => {
    if (!inputValue || isLoading) return; // Do nothing if inputValue is empty or currently loading

    const newMessage = { query: inputValue, role: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Add user message to UI
    console.log("UUID:", uuid);
    console.log("Input Value:", inputValue);
    try {
      setIsLoading(true);
      //uuid=${uuid}
      const response = await axios.post(
        `${API_URL}beginChat`,
        {
          query: inputValue,
          uuid: uuid,
        }
      ); // Call the function to get AI response

      const newAssistantMessage = { query: response.data, role: "assistant" };
      setMessages((prevMessages) => [...prevMessages, newAssistantMessage]); // Add AI response to UI

      setInputValue(""); // Clear input value after sending
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const endChat = async () => {

    try {
      const response = await axios.delete(`${API_URL}destroy?uuid=${uuid}`);

      // Show toast on success
      toast({
        title: "Request successful!",
        description: "Your request has been processed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUploaded(false);

      return response.data;
    } catch (error) {
      // Show toast on error
      toast({
        title: "Request failed!",
        description: "There was an error processing your request.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      throw error;
    }
  };

  return (
    <>

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
              PDF CHAT AI
            </Text>
            <ModalBox
            description={
              descriptions.find((desc) => desc.id === 20).description
            } />
          </HStack>
          {!uploaded ? (
            <>
              <VStack
                width={"100%"}
                align={"center"}
                justify={"center"}
                position={"relative"}
                cursor={"pointer"}
                mt={["10", "10", "10rem", "15rem"]}
              >
                <Button
                  bg="#DFD602"
                  color="#005997"
                  fontWeight="bold"
                  fontSize={["sm", "xl"]}
                  borderRadius="18px"
                  px={["4", "4"]}
                  height={["60px", "75px"]}
                  isLoading={isLoading}
                  onClick={Uploading}
                  alignSelf={"center"}
                  spinner={<BeatLoader size={8} color="white" />}
                  disabled={isLoading}
                >
                  Upload PDF
                </Button>
                <Input
                  w={"full"}
                  type={"file"}
                  variant={"unstyled"}
                  position={"absolute"}
                  opacity={"0"}
                  top={"0"}
                  cursor={"pointer"}
                  left={"0"}
                  bottom={"0"}
                  right={"0"}
                  onChange={uploadPdf}
                />
              </VStack>
            </>
          ) : (
            <>
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
                    direction={
                      message.role === "assistant" ? "row" : "row-reverse"
                    } // Reverse the direction if it's from the assistant
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
                width={"100%"}
                position={"absolute"}
                bottom={0}
                alignSelf={"center"}
                align={"center"}
                justifyContent={"center"}
                px={4}
                py={3}
                borderTop={"1px solid #6082B6"}
              >
                <Button
                  bg="#DFD602"
                  color="#005997"
                  fontWeight="bold"
                  fontSize={["sm", "md"]}
                  borderRadius="18px"
                  px={["4", "4"]}
                  onClick={onOpen}
                >
                  End Chat
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>End the Chat Session</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        {" "}
                        Are you sure you want to end the chat session
                      </Text>
                      <Text >
                        You can only end the chat when you have done some texting
                      </Text>
                      <Button
                        bg="#DFD602"
                        color="#005997"
                        fontWeight="bold"
                        fontSize={["sm", "md"]}
                        borderRadius="18px"
                        px={["4", "4"]}
                        onClick={endChat}
                        mt={10}
                      >
                        Yes
                      </Button>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && isLoading === false) {
                      handleSendClick();
                    }
                  }}
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
                  fontSize={["sm", "md"]}
                  borderRadius="18px"
                  px={["4", "4"]}
                  height={["45px", "55px"]}
                  isLoading={isLoading}
                  spinner={<BeatLoader size={8} color="white" />}
                  onClick={handleSendClick}
                  disabled={isLoading}
                >
                  Send
                </Button>
              </HStack>
            </>
          )}
        </VStack>
      </VStack>
    </>
  );
};

export default Pdfchat;
