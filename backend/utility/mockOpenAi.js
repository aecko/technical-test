// Please do not modify this file directly. This is a mock implementation of an OpenAI API call for testing purposes.

const mockOpenAi = (userInput, prompt) => {
  // Simulate a call to the OpenAI API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userInput,
        prompt,
        response: "Hello World from Mock OpenAI!",
      });
    }, 2000);
  });
};

module.exports = mockOpenAi;
