import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function openAITest() {
  const params: OpenAI.CompletionCreateParams = {
    model: "text-davinci-002",
    prompt: "Say this is a test",
    max_tokens: 6,
    temperature: 0,
  };
  const completion: OpenAI.Completion = await openAI.completions.create(params);
  console.log("completion:", completion);
}
// openAITest().catch(console.error);

export default openAI;
