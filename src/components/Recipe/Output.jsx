import { VStack, Text, Button, Box, Icon, HStack } from "@chakra-ui/react";
import { getAIAnswerApi } from "./ApiHelper";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const Output = ({ setPResponse, data, concatenated, id, audio }) => {
  const [audioSrc, setAudioSrc] = React.useState(audio);
  console.log(audioSrc);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (audio && !audioRef.current) {
      const audioS = `data:audio/mpeg;base64,${audio}`;
      console.log("setting audio src");
      setAudioSrc(audioS);
    }
  }, []);

  const copyToClipboardHandler = (text) => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      alert("Copied to clipboard");
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
  };

  const MarkdownViewer = ({ markdownText }) => {
    return (
      <Box color="white">
        <ReactMarkdown
          children={markdownText}
          components={ChakraUIRenderer()}
          remarkPlugins={[remarkGfm]}
        />
      </Box>
    );
  };

  const handleGenerate = async () => {
    let endpoint = "";
    if (id === 1) {
      endpoint = "wellness_CompanionBot";
    } else if (id === 2) {
      endpoint = "fitnessAIBot";
    } else if (id === 3) {
      endpoint = "chefAIBot";
    } else if (id === 4) {
      endpoint = "artAIBot";
    } else if (id === 5) {
      endpoint = "dreamInterpreterAIBot";
    } else if (id === 6) {
      endpoint = "eventAssistantAIBot";
    } else if (id === 7) {
      endpoint = "personalShopperAIBot";
    } else if (id === 8) {
      endpoint = "careerCoachAIBot";
    } else if (id === 9) {
      endpoint = "petCareAIBot";
    } else if (id === 10) {
      endpoint = "customMealPlannerBot";
    } else if (id === 11) {
      endpoint = "smartPackagingAssistantBot";
    } else if (id === 12) {
      endpoint = "storytellingAssistantAIBot";
    } else if (id === 13) {
      endpoint = "jokeGeneratorAIBot";
    } else if (id === 14) {
      endpoint = "moodTrackerAIBot";
    } else if (id === 15) {
      endpoint = "budgetPlannerAIBot";
    } else if (id === 22) {
      endpoint = "generateMidJourneyPrompt";
    } 
    else if (id === 24) {
      endpoint = "generateCoverLetter";
    }
    else if (id === 25) {
      endpoint = "generateHumanTone";
    }
    else if (id === 26) {
      endpoint = "generateTitleDescription";
    }
    else if (id === 27) {
      endpoint = "generateProductDescription";
    }
    else {
      endpoint = "comedyRoastAIBot";
    }

    try {
      setPResponse("");
      const response = await getAIAnswerApi(concatenated, endpoint);
      if (id === 12) {
        console.log(response?.data.response_text);
        setPResponse(response?.data.response_text);
        const audioData = response.data.audio_base64;
        const audioSrc = `data:audio/mpeg;base64,${audioData}`;
        console.log("setting audio src");
        console.log(audioSrc);
        setAudioSrc(audioSrc);
      } else {
        console.log(response?.data);
        setPResponse(response?.data);
      }
    } catch (error) {
      console.error("Error generating recipe:", error);
      throw error;
    }
  };

  const handlePlay = () => {
    if (audioSrc && !audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <VStack
        border={"1px solid #4D4D4D"}
        borderRadius="2xl"
        p={10}
        gap={6}
        width={["100%", "100%", "100%", "100%"]}
        height={["100%", "100%", "100%", "100%"]}
        minH={"55vh"}
        align="flex-start"
        bg="rgba(22, 22, 22, 0.6)"
        backdropFilter={"blur(25px)"}
        overflowY={"auto"}
        zIndex={4}
        fontSize={["sm", "sm", "md", "md"]}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          color={"white"}
          letterSpacing={".2rem"}
          textTransform={"uppercase"}
        >
          {
            id===27 ? "AI Product Description Generator":
            id===26 ? "AI Youtube SEO":
            id===25 ? "AI Human-Like Writer":
            id===24 ? "AI Cover Letter Generator":
          id === 22
            ? "Midjourney Prompt Generator"
            : id === 20
            ? "AI OCR Text Extractor"
            : id === 17
            ? "AI Virtual Friend"
            : id === 16
            ? "AI Comedy Roast"
            : id === 15
            ? "AI Budget Planner"
            : id === 14
            ? "AI Mood Tracker"
            : id === 13
            ? "AI Joke Generator"
            : id === 12
            ? "Storytelling AI Assistant"
            : id === 11
            ? "Smart Packaging Assistant"
            : id === 10
            ? "AI Custom Meal Planner"
            : id === 9
            ? "AI Pet Care Assistant"
            : id === 8
            ? "AI Career Coach"
            : id === 7
            ? "Personal Shopping Assistant"
            : id === 6
            ? "Event Planning Assistant"
            : id === 5
            ? "AI Dream Interpreter"
            : id === 3
            ? "AI Personal Chef"
            : id === 2
            ? "AI Fitness Coach"
            : id === 1
            ? "AI Mental Wellness Coach"
            : "AI Art Tutor"}
        </Text>
        <MarkdownViewer markdownText={data} />
        {id === 12 ? (
          <>
            <HStack>
              <Icon
                cursor={"pointer"}
                onClick={handlePlay}
                as={HiOutlineSpeakerWave}
                color="white"
                width={8}
                height={8}
              />
              <Icon
                cursor={"pointer"}
                onClick={handlePause}
                as={HiMiniSpeakerXMark}
                color="white"
                width={8}
                height={8}
              />
            </HStack>
          </>
        ) : null}
        {data && (
          <Button
            width={["100%", "100%", "100%", "100%"]}
            mt={4}
            type="submit"
            bg="#DFD602"
            color="#005997"
            fontSize={["sm", "md", "lg", "lg"]}
            as="i"
            borderRadius="full"
            py={2}
            onClick={() => copyToClipboardHandler(data)}
          >
            Copy
          </Button>
        )}
        {data && (
          <Button
            width={["100%", "100%", "100%", "100%"]}
            type="submit"
            bg="#38AEFF"
            color="#161616"
            fontSize={["sm", "md", "lg", "lg"]}
            as="i"
            borderRadius="full"
            py={2}
            cursor={"pointer"}
            onClick={handleGenerate}
          >
            Generate Again
          </Button>
        )}

        {!data && (
          <Text color="white" opacity={"0.67"} fontSize="lg" mt={4}>
            No response yet
          </Text>
        )}
      </VStack>
    </>
  );
};

export default Output;
