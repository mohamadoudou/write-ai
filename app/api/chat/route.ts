import OpenAI from "openai";
import openAI from "@/openAISetup";

export async function GET(req: Request) {
  // Extract the `messages` from the body of the request
  //   const { messages } = await req.json();

  const params: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
    messages: [{ role: "system", content: "Help to make money online." }],
    model: "gpt-3.5-turbo",
  };

  // const completion = await openai.chat.completions.create({
  //   messages: [{"role": "system", "content": "You are a helpful assistant."},
  //       {"role": "user", "content": "Who won the world series in 2020?"},
  //       {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
  //       {"role": "user", "content": "Where was it played?"}],
  //   model: "gpt-3.5-turbo",
  // });
  const completion = await openAI.chat.completions.create(params);
  return Response.json(completion);
}
