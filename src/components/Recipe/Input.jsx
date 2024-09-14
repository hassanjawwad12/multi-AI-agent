import React from "react";
import { useRef } from "react";
import "../../index.css";

import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { getAIAnswerApi } from "./ApiHelper";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const InputF = ({ onSubmit, id }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [field1, setField1] = React.useState("");
  const [field2, setField2] = React.useState("");
  const [field3, setField3] = React.useState("");

  const handleField1Change = (e) => {
    setField1(e.target.value);
  };

  const handleField2Change = (e) => {
    setField2(e.target.value);
  };

  const handleField3Change = (e) => {
    setField3(e.target.value);
  };

  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log("Image preview:", reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handlePicSubmit = async () => {
    setIsLoading(true);
    const field1Value = field1; // Assuming field1 is defined and accessible here
    const file = fileInputRef.current?.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log("Form Data:", formData);

      // Determine the API URL and append the query parameter if field1Value is present
      let apiUrl = `${API_URL}${
        field1Value ? "artTutorAIBot" : "extractImageText"
      }`;
      if (field1Value) {
        apiUrl += `?query=${encodeURIComponent(field1Value)}`;
      }

      try {
        const response = await axios.post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("API response:", response.data);
        onSubmit(response.data, field1Value);
      } catch (error) {
        console.error("Error sending data to API:", error);
      }
    }
    setIsLoading(false);
  };

  ///dreamInterpreterAIBot
  const handleSubmit = async () => {
    setIsLoading(true);
    let concatenatedValue = "";
    let endpoint = "";

    if (id === 3) {
      concatenatedValue = `Dietary Preference: ${field1}, Allergies: ${field2}, Available Ingredients: ${field3}`;
      endpoint = "chefAIBot";
    } else if (id === 2) {
      concatenatedValue = `Current physical status: ${field1}, Time Workout: ${field2}, Available Equipment: ${field3} generate me an appropriate workout plan`;
      endpoint = "fitnessAIBot";
    } else if (id === 1) {
      concatenatedValue = `How I are feeling: ${field1}, 
            Here are my Phobias: ${field2}
            Here is my mental health history: ${field3} 
            Now provide me personalized strategies to promote mental well-being, offering coping mechanisms, mindfulness exercises, and tailored recommendations.`;
      endpoint = "wellness_CompanionBot";
    } else if (id === 5) {
      concatenatedValue = `Most occuring thing in your dream: ${field1}, Last dream: ${field2}, History regarding types of dreams you usually experience: ${field3} 
            Now provide me interpretations based on psychological theories. You could also track dream patterns over time to offer insights into the users subconscious mind.`;
      endpoint = "dreamInterpreterAIBot";
    } else if (id === 6) {
      concatenatedValue = `Number of guests: ${field1}, Budget in PKR: ${field2}, Occasion: ${field3}
            Now suggest themes, menus, and entertainment options based on the number of guests, budget, and occasion.`;
      endpoint = "eventAssistantAIBot";
    } else if (id === 7) {
      concatenatedValue = `Your preferred style: ${field1}, Budget: ${field2}, List of specific items or brands you're interested in: ${field3}
            Now suggest users the perfect items for their wardrobe or home. Suggest products based on personal style, budget, and preferences, and helps with online shopping, returns, and exchanges.`;
      endpoint = "personalShopperAIBot";
    } else if (id === 8) {
      concatenatedValue = `Your long-term career goals and aspirations: ${field1}, Your preferred style: ${field2}, Your personal and professional values: ${field3}.
            Now provide personalized strategies to promote career growth, offering career advice, and tailored recommendations.`;
      endpoint = "careerCoachAIBot";
    } else if (id === 9) {
      concatenatedValue = `Your pet's type: ${field1}, Your pet's age: ${field2}, Your pet's behavioral issue: ${field3}.
            Now provide personalized strategies to improve your pet's behavior, offering pet care advice, and tailored recommendations.`;
      endpoint = "petCareAIBot";
    } else if (id === 10) {
      concatenatedValue = `Your dietary preferences: ${field1}, Your allergies: ${field2}, Your dietary restrictions: ${field3}.
        Now provide me a custom meal plan that takes into account the preferences and restrictions and also some healthy tips.`;
      endpoint = "customMealPlannerBot";
    } else if (id === 11) {
      concatenatedValue = `Your product type: ${field1}, Your product's material: ${field2}, Your product's intended use: ${field3}.
        Now provide me some smart packaging tips to ensure the product is safe and durable and transported smoothly.`;
      endpoint = "smartPackagingAssistantBot";
    } else if (id === 12) {
      concatenatedValue = `Your story type: ${field1}, Your story's genre: ${field2}, Your story's intended audience: ${field3}.
        Now give me an interesting story based on the provided input for the audience.`;
      endpoint = "storytellingAssistantAIBot";
    } else if (id === 13) {
      concatenatedValue = `Your preferred joke type: ${field1}, Your joke's theme: ${field2}, Your audience for the joke: ${field3}.
        Now, let's generate 2 hilarious jokes based on your preferences!`;
      endpoint = "jokeGeneratorAIBot";
    } else if (id === 14) {
      concatenatedValue = `Your current mood: ${field1}, Mood intensity: ${field2}, Triggers or events: ${field3}.
        Let's track your mood and suggest music playlists based on your preferences!`;
      endpoint = "moodTrackerAIBot";
    } else if (id === 15) {
      concatenatedValue = `Your current financial situation: ${field1}, Monthly income: ${field2}, Spending Pattern: ${field3}.
      Let's plan your budget and suggest saving strategies based on your financial goals!`;
      endpoint = "budgetPlannerAIBot";
    } else if (id === 16) {
      concatenatedValue = `Key personality traits of friend: ${field1}, Topics about which my friend is sensitive about : ${field2}, Memorable stories about my friend: ${field3}`;
      endpoint = "comedyRoastAIBot";
    } else if (id === 17) {
      concatenatedValue = `How are you feeling, really?: ${field1}, What's been weighing on your mind?: ${field2}, Is there anything specific you'd like to talk about, or would you just prefer a listening ear right now?: ${field3}`;
      endpoint = "virtualFriendAIBot";
    }
    if (id === 22) {
      concatenatedValue = `What objects do you see in the scene?: ${field1}, What is the setting or environment of the scene?: ${field2}, How do the objects and setting interact with each other?: ${field3}`;
      endpoint = "generateMidJourneyPrompt";
    }
    if (id === 24) {
      concatenatedValue = `What is the job title?: ${field1}, What is the company name you are applying at?: ${field2}, What are your skills and educational background?: ${field3}`;
      endpoint = "generateCoverLetter";
    }
    if (id === 25) {
      concatenatedValue = `What is the topic of the writing?: ${field1}, What is the writing for( office, school assignment etc)?: ${field2}, The writing is?: ${field3}`;
      endpoint = "generateHumanTone";
    }
    if (id === 26) {
      concatenatedValue = `What is the theme of the video?: ${field1}, What is the setting of the video( office, school,park etc)?: ${field2}, People in the video and what are they doing?: ${field3}`;
      endpoint = "generateTitleDescription";
    }
    if (id === 27) {
      concatenatedValue = `What is the company of the product?: ${field1}, What is the product and what it is made of?: ${field2}, For what purposes the product is used for?: ${field3}`;
      endpoint = "generateProductDescription";
    }
    try {
      if (id === 12) {
        try {
          const response = await getAIAnswerApi(concatenatedValue, endpoint);
          console.log(response?.data.response_text);
          onSubmit(
            response?.data.response_text,
            concatenatedValue,
            response?.data.audio_base64
          );
        } catch (error) {
          console.error("Error generating response:", error);
          throw error;
        }
      } else {
        const response = await getAIAnswerApi(concatenatedValue, endpoint);
        onSubmit(response?.data, concatenatedValue);
      }
    } catch (error) {
      console.error("Error generating response:", error);
      throw error;
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <VStack
        border={"1px solid #4D4D4D"}
        borderRadius="2xl"
        p={8}
        gap={6}
        h={"full"}
        w={"full"}
        align="flex-start"
        justifyContent="space-between"
        zIndex={4}
        bg="rgba(22, 22, 22, 0.6)"
        backdropFilter={"blur(25px)"}
      >
        <VStack w="full" spacing={4} align="flex-start">
          <Text
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"white"}
            letterSpacing={".2rem"}
            textTransform={"uppercase"}
          >
            {id === 27
              ? "AI Product Description Generator"
              : id === 26
              ? "AI Video Title and Description Generator"
              : id === 25
              ? "AI human-like Writer"
              : id === 24
              ? "AI Cover Letter Generator"
              : id === 22
              ? "Mid-Journey Prompt Generator"
              : id === 20
              ? "AI text extractor OCR"
              : id === 17
              ? "AI Virtual Friend"
              : id === 16
              ? "AI Comedy Roast"
              : id === 15
              ? "AI Budget Planner"
              : id === 14
              ? "Mood Tracker"
              : id === 13
              ? "AI Joke Generator"
              : id === 12
              ? "Storytelling AI Assistant"
              : id === 11
              ? "Smart Packaging Assistant"
              : id === 10
              ? "Custom Meal Planner"
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
              : id == 1
              ? "AI Mental Wellness Coach"
              : "AI Art Tutor"}
          </Text>
          <Text color={"whiteAlpha.600"} fontSize={["sm", "sm", "md", "md"]}>
            {id === 27
              ? "I can help you generate a product description for your product based on the information you provide. Simply enter the company of the product, the product and what it is made of, and for what purposes the product is used for."
              : id === 26
              ? "I can help you generate a title and description for your video based on the information you provide. Simply enter the theme of the video, the setting of the video, and the people in the video and what they are doing."
              : id === 25
              ? "I can help you turn your AI generated writing into human like writing"
              : id === 24
              ? "I can help you generate a cover letter for your job application based on the information you provide. Simply enter the job title, the company name you are applying at, and your skills and educational background."
              : id === 22
              ? "I can help you generate mid-journey prompts for your story based on the information you provide. Simply enter the objects you see in the scene, the setting or environment of the scene, and how the objects and setting interact with each other."
              : id === 20
              ? "I can help you extract text from images using OCR technology. Simply upload an image and I'll extract the text for you."
              : id === 17
              ? "I can help you with your mental health by providing you with personalized strategies to promote mental well-being, offering coping mechanisms, mindfulness exercises, and tailored recommendations."
              : id === 16
              ? "I can help you with roasting your friend based on the information you provide."
              : id === 15
              ? "I can help you plan your budget and suggest saving strategies based on your financial goals."
              : id === 14
              ? "I can help you track your mood based on the information you provide."
              : id === 13
              ? "I can help you with generating a hilarious joke based on your preferences."
              : id === 12
              ? "I can help you with an interesting story based on the provided input for the audience."
              : id === 11
              ? "I can help you with smart packaging tips to ensure the product is safe and durable and transported smoothly."
              : id === 10
              ? "I can help you with a custom meal plan that takes into account your preferences and restrictions and also some healthy tips."
              : id === 9
              ? "I can help you with personalized strategies to improve your pet's behavior, offering pet care advice, and tailored recommendations."
              : id === 8
              ? "I can help you with long-term career goals and aspirations, by providing personalized strategies to promote career growth, offering career advice, and tailored recommendations."
              : id === 7
              ? "I can help you find the perfect items for your wardrobe or home. I can suggest products based on your personal style, budget, and preferences, and help with online shopping, returns, and exchanges."
              : id === 6
              ? "I can help you suggest themes, menus, and entertainment options based on the number of guests, budget, and occasion."
              : id === 5
              ? "I can help you interpret your dreams based on psychological theories. I can also track dream patterns over time to offer insights into your subconscious mind."
              : id === 3
              ? "I can help you with personalized recipes based on your dietary preferences, allergies, and available ingredients."
              : id === 2
              ? "I can help you with an appropriate workout plan based on your current physical status, time workout, and available equipment."
              : id === 1
              ? "I can help you with personalized strategies to promote mental well-being, offering coping mechanisms, mindfulness exercises, and tailored recommendations."
              : "I can help you with your artwork by providing you with feedback and suggestions."}
          </Text>
        </VStack>
        <VStack w="full" spacing={4} align="flex-start">
          {id !== 20 && (
            <FormControl mt="6">
              <FormLabel
                mb={"4"}
                color="white"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {id === 17 ? "How are you feeling, really?" : "Enter your "}
                {id === 27
                  ? "Company of the product"
                  : id === 26
                  ? "Theme of the video"
                  : id === 25
                  ? "Topic of the writing"
                  : id === 24
                  ? "Job Title"
                  : id === 22
                  ? "objects you see in the scene"
                  : id === 16
                  ? "key personality traits of your friend"
                  : id === 15
                  ? "your current financial situation (e.g., student, employed, unemployed)"
                  : id === 14
                  ? "your current mood (e.g., happy, sad, anxious)"
                  : id === 13
                  ? "your preferred joke type (e.g., puns, knock-knock jokes, one-liners)"
                  : id === 12
                  ? "your story type (e.g., fiction, non-fiction, fantasy)"
                  : id === 11
                  ? "your product type (e.g., food, electronics, clothing)"
                  : id === 10
                  ? "your dietary preferences (e.g., vegan, vegetarian, keto)"
                  : id === 9
                  ? "your pet's type (e.g., dog, cat, bird)"
                  : id === 8
                  ? "your long-term career goals and aspirations"
                  : id === 7
                  ? "your preferred style (e.g., casual, formal, trendy)"
                  : id === 6
                  ? "Number of guests"
                  : id === 5
                  ? "Most occuring thing in your dream"
                  : id === 4
                  ? "Artwork Description"
                  : id === 3
                  ? "Dietary Preference"
                  : id === 2
                  ? "Current physical status"
                  : id === 1
                  ? "how you are feeling"
                  : null}
              </FormLabel>
              <Input
                border={"1px solid  #626262"}
                bg="#2C2C2C"
                type="text"
                value={field1}
                width={"full"}
                borderRadius="lg"
                color="whiteAlpha.800"
                onChange={handleField1Change}
                required
              />
            </FormControl>
          )}
          {id !== 4 && id !== 20 ? (
            <FormControl mt="6">
              <FormLabel
                mb={"4"}
                color="white"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {id === 17
                  ? "What's been weighing on your mind?"
                  : "Enter your "}
                {id === 27
                  ? "Product and what it is made of"
                  : id === 26
                  ? "Setting of the video"
                  : id === 25
                  ? "purpose of the writing ( office work, school task etc)"
                  : id === 24
                  ? "Company Name"
                  : id === 22
                  ? "setting or environment of the scene"
                  : id === 16
                  ? "friend's topics about which he/she is sensitive about"
                  : id === 15
                  ? "monthly income"
                  : id === 14
                  ? "mood intensity (e.g., high, low, medium)"
                  : id === 13
                  ? "joke's theme (e.g., animals, food, technology)"
                  : id === 12
                  ? "story's genre (e.g., romance, mystery, thriller)"
                  : id === 11
                  ? "product's material (e.g., plastic, glass, metal)"
                  : id === 10
                  ? "allergies"
                  : id === 9
                  ? "pet's age"
                  : id === 8
                  ? "strengths, weaknesses, and areas of expertise"
                  : id === 7
                  ? "budget for this shopping session "
                  : id === 6
                  ? "Budget"
                  : id === 5
                  ? "Last dream"
                  : id === 3
                  ? "Allergies"
                  : id === 2
                  ? "Time Workout"
                  : id === 1
                  ? "Phobias"
                  : null}
              </FormLabel>
              <Input
                border={"1px solid  #626262"}
                bg="#2C2C2C"
                type="text"
                value={field2}
                width={"full"}
                borderRadius="lg"
                color="whiteAlpha.800"
                onChange={handleField2Change}
                required
              />
            </FormControl>
          ) : null}
          {id !== 4 && id !== 20 ? (
            <FormControl id="field3" mt="6">
              <FormLabel
                mb={"4"}
                color="white"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {id === 17
                  ? "Is there anything specific you'd like to talk about, or would you just prefer a listening ear right now?"
                  : "Enter your "}
                {id === 27
                  ? "For what purposes the product is used for"
                  : id === 26
                  ? "People in the video and what are they doing"
                  : id === 25
                  ? "Writing"
                  : id === 24
                  ? "Educational Background, Skills and Work experience"
                  : id === 22
                  ? "How do the objects and setting interact with each other"
                  : id === 16
                  ? "memorable stories about your friend"
                  : id === 15
                  ? "Spending Pattern accounts related stuff example: rent:5k, food:3k, activities: 2k,petrol/car:4k"
                  : id === 14
                  ? "triggers or events (e.g., work, family, relationships)"
                  : id === 13
                  ? "audience for the joke (e.g., children, adults, teenagers)"
                  : id === 12
                  ? "story's intended audience (e.g., children, adults, teenagers)"
                  : id === 11
                  ? "product's intended use (e.g., food, electronics, clothing)"
                  : id === 10
                  ? "dietary restrictions"
                  : id === 9
                  ? "pet's behavioral issue"
                  : id === 8
                  ? "personal and professional values"
                  : id == 7
                  ? "list of specific items or brands you're interested in"
                  : id === 6
                  ? "occasion"
                  : id === 5
                  ? "history regarding types of dreams you usually experience"
                  : id === 3
                  ? "available ingredients"
                  : id === 2
                  ? "available Equipment"
                  : id === 1
                  ? "Mental Health History"
                  : null}
              </FormLabel>
              <Textarea
                border={"1px solid  #626262"}
                bg="#2C2C2C"
                value={field3}
                width={"full"}
                borderRadius="lg"
                onChange={handleField3Change}
                color="whiteAlpha.800"
                required
                p={"3"}
              />
            </FormControl>
          ) : null}
          {id === 4 || id === 20 ? (
            <FormControl id="field3" mt="6">
              <FormLabel
                mb={"4"}
                color="white"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {id === 4 ? "Upload your artwork" : "Upload the image"}
              </FormLabel>
              <Input
                type="file"
                width={"full"}
                color="#8C8C8C"
                border={"none"}
                required
                accept="image/jpeg,image/png"
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
            </FormControl>
          ) : null}
        </VStack>
        {id !== 4 && id !== 20 ? (
          <Button
            width={["100%", "100%", "100%", "100%"]}
            mt={4}
            type="submit"
            bg="#DFD602"
            color="#005997"
            as="i"
            borderRadius="lg"
            onClick={handleSubmit}
            isLoading={isLoading}
            spinner={<BeatLoader size={8} color="white" />}
            py={2}
          >
            Run
          </Button>
        ) : (
          <Button
            width={["100%", "100%", "100%", "100%"]}
            mt={4}
            type="submit"
            bg="#DFD602"
            color="#005997"
            as="i"
            borderRadius="full"
            onClick={handlePicSubmit}
            isLoading={isLoading}
            spinner={<BeatLoader size={8} color="white" />}
            py={2}
          >
            Run
          </Button>
        )}
      </VStack>
    </>
  );
};

export default InputF;
