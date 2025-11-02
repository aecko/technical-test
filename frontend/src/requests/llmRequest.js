// Please feel free to modify the boilerplate code below.

import axios from "axios";

const llmRequest = async (userInput) => {
  const payload = {
    userInput,
  };
  const res = await axios.post("/api/llmRequest", payload);
  return res.data;
};

export default llmRequest;
