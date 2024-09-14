import { VStack, Stack, Box } from "@chakra-ui/react";
import InputF from "./Input";
import Output from "./Output";
import React from "react";
import ChatBot from "./Exclusive-Features/ChatBot";
import Pdfchat from "./Exclusive-Features/Pdfchat";
import Wallpaper from "./Exclusive-Features/Wallpaper";
import Researcher from "./Exclusive-Features/Researcher";

export const Main = ({ id }) => {
  const [Presponse, setPResponse] = React.useState("");
  const [concatenatedValue, setConcatenatedValue] = React.useState("");
  const [audio, setAudio] = React.useState(null);

  const handleSubmit = (data, concatenatedValue, extraData = "") => {
    console.log(extraData);
    if (extraData) {
      setAudio(extraData);
    }
    setPResponse(data ? data : "");
    setConcatenatedValue(concatenatedValue ? concatenatedValue : "");
    return null;
  };

  return (
    <>
      {id === 18 || id === 19 ? (
        <>
          <ChatBot id={id} />
        </>
      ) : (
        <>
          {id === 21 ? (
            <>
              <Pdfchat />
            </>
          ) : (
            <>
              {id === 23 ? (
                <Wallpaper />
              ) : (
                <>
                  {id === 28 ? (
                    <Researcher />
                  ) : (
                    <>
                      <VStack width="100%" bg="black" padding={"4"} h={"100vh"}>
                        {/* blurred box with gradient in background of stack */}
                        <Box
                          pos={"absolute"}
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          background={
                            "linear-gradient(180deg, rgba(223, 214, 1, 0.8) 0%, rgba(4, 178, 248, 0.8) 100%)"
                          }
                          zIndex={1}
                          opacity={0.25}
                          filter={"blur(100px)"}
                        />
                        <Stack
                          width="full"
                          h={["full", "full", "full", "full"]}
                          pos={"relative"}
                          direction={["column", "column", "column", "row"]}
                          alignItems={[
                            "center",
                            "center",
                            "flex-start",
                            "flex-start",
                          ]}
                        >
                          <InputF onSubmit={handleSubmit} id={id} />
                          <Output
                            setPResponse={setPResponse}
                            data={Presponse}
                            concatenated={concatenatedValue}
                            id={id}
                            audio={audio}
                          />
                        </Stack>
                      </VStack>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
