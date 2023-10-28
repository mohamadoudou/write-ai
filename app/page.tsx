"use client";
import "./editor/editor.css";
import Editor from "./editor/Editor";
import { useEffect } from "react";
import { openAITest } from "@/openAISetup";

export default function Home() {
  // useEffect(() => {
  //   console.log("process.env.OPENAI_API_KEY,", process.env.OPENAI_API_KEY);
  //   openAITest();
  // }, []);

  return <Editor />;
}
