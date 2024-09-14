import { useEffect, useState } from "react";
import React from "react";
import { Box,Heading, Stack } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import { Recipe } from "./pages/Recipe";
import partnerOneLogo from './assets/partner-1-log.png'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import './index.css'
import Landing from "./pages/Landing";
import AIPulse from "./pages/Partners/AIPulse";
import BribeAI from "./pages/partners/BribeAI";
import NeuralByte from "./pages/partners/NeuralByte";

function App() {
  const [options, setOptions] = React.useState([
    {
      id: 1,
      title: "AI Mental Wellness Coach",
      active: true,
    },
    {
      id: 2,
      title: "AI Fitness Coach",
      active: false,
    },
    {
      id: 3,
      title: "AI Personal Chef",
      active: false,
    },
    {
      id: 4,
      title: "AI Art Tutor",
      active: false,
    },
    {
      id: 5,
      title: "Dream Interpreter",
      active: false,
    },
    {
      id: 6,
      title: "Event Planning Assistant",
      active: false,
    },
    {
      id: 7,
      title: "Personal Shopping Assistant",
      active: false,
    },
    {
      id: 8,
      title: "AI Career Coach",
      active: false,
    },
    {
      id: 9,
      title: "AI Pet Care Assistant",
      active: false,
    },
    {
      id: 10,
      title: "AI Custom Meal Planner",
      active: false,
    },
    {
      id: 11,
      title: "Smart Packaging Assistant",
      active: false,
    },
    {
      id: 12,
      title: "AI Story Teller",
      active: false,
    },
    {
      id:13,
      title: "Joke Generator Bot",
      active: false,
    },
    {
      id: 14,
      title: "AI Mood Tracker",
      active: false,
    },
    {
      id: 15,
      title: "AI Budget Planner",
      active: false,
    },
    {
      id: 16,
      title: "AI Comedy Roast",
      active: false,
    },
    {
      id: 17,
      title: "AI Virtual Friend",
      active: false,
    },
    {
      id: 18,
      title:'Mystery Solver AI',
      active:false
    },
    {
      id:19,
      title: 'Time Traveler AI',
      active:false
    },
    {
      id:20,
      title: 'AI Text Extractor OCR',
      active:false
    },
    {id : 21,
      title: 'AI PDF Chat',
      active:false
    },
    {
      id:22,
      title: 'Midjourney Prompt Generator',
      active:false
    },
     {
       id:23,
       title:'AI Wallpaper Generator',
       active:false
     },
     {
      id:24,
      title:'AI Cover Letter Generator',
      active:false
     },
     {
      id:25,
      title:'AI Human Writer Assistant',
      active:false
     },
     {
      id:26,
      title:'AI Youtube SEO',
      active:false
     },
     {
      id: 27,
      title:'AI Product Description Generator',
      active:false
     },
     {
      id: 28,
      title:'AI Brainstormer',
      active:false
     }
  ]);
  const [partnersOptions, setPartnersOptions] = React.useState([
    {
      id: 1,
      title: 'PulseAI',
      logo: partnerOneLogo,
      link: '/builders-hub/ai-pulse',
      active: false,
    },
    {
      id: 2,
      title: 'Bribe AI',
      logo: 'https://static.wixstatic.com/media/178e5c_e70fbdf586fb4d1bab3f8b2fa64e7704~mv2.png/v1/fill/w_900,h_900,al_c,q_90,enc_auto/bribeaisnipecircle.png',
      link: '/builders-hub/bribe-ai',
      active: false
    },
    {
      id: 3,
      title: 'NeuralByte',
      logo: 'https://neuralbyte.net/img/Aixible.png',
      link: '/builders-hub/neuralbyte',
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("first");
    if (!isFirstVisit) {
      localStorage.clear();
      sessionStorage.setItem("first", "true");
    }
  }, []);

  return (
    <BrowserRouter basename='/app'>
      <Switch>
        <Stack
          onClick={() => {
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          direction={["column", "column", "row"]}
          h={"100dvh"}
          spacing={"0"}
          align={"flex-start"}
          bg={"#000"}
          overflowY={"hidden"}
        >
          <Route path="/">
            <Sidebar
              setIsExpanded={setIsExpanded}
              isExpanded={isExpanded}
              options={options}
              setOptions={setOptions}
              partnerOpt={partnersOptions}
              setPartnerOpt={setPartnersOptions}
            />
            <Header setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/AIbot">
            <Recipe />
          </Route>
          <Route exact path="/builders-hub">
            <Stack
              direction={["column", "column", "row"]}
              h={"100dvh"}
              spacing={"0"}
              w={"100vw"}
              p={8}
              align={['center', 'center', 'flex-start', 'flex-start']}
              justify={"center"}
              bg={"#000"}
              pos={'relative'}
            >
              <Box
                pos={'absolute'}
                top={0}
                left={0}
                right={0}
                bottom={0}
                background={'linear-gradient(180deg, rgba(223, 214, 1, 0.2) 0%, rgba(4, 178, 248, 1) 100%)'}
                zIndex={1}
                opacity={0.25}
                filter={'blur(100px)'}
            />
              <Heading fontSize={'2xl'} color={"white"}>Builders Hub</Heading>
            </Stack>
          </Route>
          <Route path="/builders-hub/ai-pulse">
            <AIPulse />
          </Route>
          <Route path="/builders-hub/bribe-ai">
            <BribeAI />
          </Route>
          <Route path="/builders-hub/neuralbyte">
            <NeuralByte />
          </Route>
        </Stack>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
