import OpenAI from "openai";
import openAI from "@/openAISetup";

export async function GET(req: Request) {
  // Extract the `messages` from the body of the request
  //   const { messages } = await req.json();

  const params: OpenAI.CompletionCreateParams = {
    model: "gpt-3.5-turbo",
    prompt: "Say this is a test",
    max_tokens: 6,
    temperature: 0,
  };
  const completion: OpenAI.Completion = await openAI.completions.create(params);
  return Response.json(completion);
}
