import React from "react";
import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { Select } from "@chakra-ui/react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Wallpaper = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [field3, setField3] = React.useState("");
  const [revealR, setRevealR] = React.useState(false);
  const [url, setUrl] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState("1024x1024");

 
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleField3Change = (e) => {
    setField3(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    console.log(selectedOption);
    console.log(field3);

    const requestBody = JSON.stringify({
      dimensions: selectedOption,
      query: field3,
    });

    try {
      const response = await axios.post(
        `${API_URL}generateWallpaper`,
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
      const dataUri = `data:image/png;base64,${data.base64_string}`;
      console.log(data.base64_string);
      setUrl(dataUri);
      setRevealR(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
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
        AI Wallpaper Generator
      </Text>
      <Text color={"whiteAlpha.600"} fontSize={["sm", "sm", "lg", "lg"]}>
        I can help you create a unique, personalized wallpaper by describing the
        objects, colors, and patterns you envision, along with the desired mood.
      </Text>
      {revealR ? (
        <>
          <Text color={"white"} fontSize={["md", "md", "2xl", "2xl"]}>
            Generated Wallpaper
          </Text>
          {url ? (
            <>
              <Image
                width="40%"
                height="auto"
                maxWidth="100%"
                maxHeight="100%"
                src={url}
                alt="Generated Wallpaper"
              />
            </>
          ) : null}
        </>
      ) : (
        <>
          <FormControl mt="6" pl={4}>
            <FormLabel
              mb={"4"}
              color="white"
              fontSize={["sm", "sm", "md", "lg"]}
            >
              Select the height and width of the wallpaper in pixels
            </FormLabel>
            <Select
              width={["90%", "90%", "50%", "50%"]}
              color={"whiteAlpha.500"}
              bg="#2C2C2C"
              value={selectedOption}
              onChange={handleChange}
              sx={selectStyle} // Apply the style to the select component
            >
              <option value="1024x1024">1024x1024</option>
              <option value="1152x896" style={selectStyle.option}>
                1152x896
              </option>
              <option value="1216x832" style={selectStyle.option}>
                1216x832
              </option>
              <option value="1344x768" style={selectStyle.option}>
                1344x768
              </option>
              <option value="1536x640" style={selectStyle.option}>
                1536x640
              </option>
              <option value="640x1536" style={selectStyle.option}>
                640x1536
              </option>
              <option value="768x1344" style={selectStyle.option}>
                768x1344
              </option>
              <option value="832x1216" style={selectStyle.option}>
                832x1216
              </option>
              <option value="896x1152" style={selectStyle.option}>
                896x1152
              </option>
            </Select>
          </FormControl>

          <FormControl mt="6" pl={4}>
            <FormLabel
              mb={"4"}
              color="white"
              fontSize={["sm", "sm", "md", "lg"]}
            >
              Enter the description for the wallpaper you want to generate
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
              placeholder="A white background with a black cat in the center, looking at the moon, with a starry sky in the background."
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

export default Wallpaper;
