import React from "react";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const API_URL = import.meta.env.VITE_API_URL;

const Researcher = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [field3, setField3] = React.useState("");
  const [revealR, setRevealR] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("research_report");
  const [resp, setResp] = React.useState("");


  const MarkdownViewer = ({ markdownText }) => {
    let markdownString = '';

    if (typeof markdownText === 'string') {
      markdownString = markdownText;
    } else if (typeof markdownText === 'object') {
      if (markdownText.data) {
        markdownString = markdownText.data;
      } else {
        console.warn('Unrecognized markdownText structure:', markdownText);
      }
    }
  
    console.log('Markdown Content:', markdownString); 
  
    return (
      <Box color="white" height="510px" overflowY="auto" padding="4">
        <ReactMarkdown
          children={markdownString}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            ...ChakraUIRenderer(),
          }}
          remarkPlugins={[remarkGfm]}
        />
      </Box>
    );
  };
  

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleField3Change = (e) => {
    setField3(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const requestBody = JSON.stringify({
      query: field3,
      report: selectedOption,
    });

    try {
      const response = await axios.post(
        `${API_URL}brainStormerBot`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const data = response.data;
      console.log(response.data); // Assuming the response data is the markdown text
      setResp(data);
      setRevealR(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const selectStyle = {
    option: {
      color: "white", // Text color
      backgroundColor: "#2C2C2C", // Background color
    },
  };

  return (
    <VStack
      border={"1px solid #4D4D4D"}
      borderRadius="2xl"
      gap={6}
      px={4}
      h={["88vh", "88vh", "93vh", "93vh"]}
      w={["90vw", "90vw", "90%", "90%"]}
      mt={10}
      align="center"
      justifyContent="center"
      zIndex={4}
      bg="rgba(22, 22, 22, 0.6)"
      backdropFilter={"blur(25px)"}
    >
      <Text
        fontWeight={"bold"}
        fontSize={["lg", "lg", "2xl", "2xl"]}
        color={"white"}
        letterSpacing={".2rem"}
        textTransform={"uppercase"}
      >
        AI Brainstormer
      </Text>
      <Text color={"whiteAlpha.600"} fontSize={["sm", "sm", "lg", "lg"]}>
        AI tool that will brainstorm on the topic and will search internet too
        for getting the answer.
      </Text>
      {revealR ? (
        <>
          <Text color={"white"} fontSize={["md", "md", "2xl", "2xl"]}>
            Generated Report
          </Text>
          <MarkdownViewer markdownText={resp} />
        </>
      ) : (
        <>
          <FormControl mt="6" pl={4}>
            <FormLabel
              mb={"4"}
              color="white"
              fontSize={["sm", "sm", "md", "lg"]}
            >
              Select the type of report you want to generate
            </FormLabel>
            <Select
              width={["90%", "90%", "50%", "50%"]}
              color={"whiteAlpha.500"}
              bg="#2C2C2C"
              value={selectedOption}
              onChange={handleChange}
              sx={selectStyle} // Apply the style to the select component
            >
              <option value="research_report">research_report</option>
              <option value="resource_report" style={selectStyle.option}>
                resource_report
              </option>
              <option value="outline_report" style={selectStyle.option}>
                outline_report
              </option>
              <option value="subtopic_report" style={selectStyle.option}>
                subtopic_report
              </option>
            </Select>
          </FormControl>
          <FormControl mt="6" pl={4}>
            <FormLabel
              mb={"4"}
              color="white"
              fontSize={["sm", "sm", "md", "lg"]}
            >
              Enter what you want to search
            </FormLabel>
            <Input
              border={"1px solid  #626262"}
              bg="#2C2C2C"
              type="text"
              value={field3}
              width={["90%", "90%", "50%", "50%"]}
              borderRadius="lg"
              color="whiteAlpha.800"
              onChange={handleField3Change}
              placeholder="Upcoming netflix seasons"
              required
            />
          </FormControl>
          <Button
            width={["90%", "90%", "50%", "50%"]}
            mt={4}
            type="submit"
            bg="#DFD602"
            color="#005997"
            as="i"
            borderRadius="lg"
            onClick={handleSubmit}
            alignSelf={"flex-start"}
            isLoading={isLoading}
            ml={4}
            spinner={<BeatLoader size={8} color="white" />}
            py={2}
          >
            Run
          </Button>
        </>
      )}
    </VStack>
  );
};

export default Researcher;
