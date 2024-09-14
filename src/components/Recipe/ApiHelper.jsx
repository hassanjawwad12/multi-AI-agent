import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
//const API_URL="https://33bc-2407-aa80-116-44b8-27f-f29e-8127-92a8.ngrok-free.app/gpt-chat/"

export const getAIAnswerApi = async (input,endpoint) => {
    try {
      const response = await axios.post(`${API_URL}${endpoint}`, {
        query: input,
      });
      return response;
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };