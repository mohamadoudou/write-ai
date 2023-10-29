"use client";
import { ChangeEvent, SetStateAction, useState, useTransition } from "react";

export default function Demo() {
  const [text, setText] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    let textTest: string[] = [];
    startTransition(() => {
      for (let i = 0; i < 1000; i++) {
        textTest.push(`${1}-m`);
      }
      setLetters(textTest);
    });
  };

  return (
    <div className="mt-3">
      <p className="mr-2 mb-2">useTransition Demo</p>
      <label htmlFor="text" className="mr-2">
        Type Fast
      </label>
      <input type="text" name="text" className="" onChange={handleChange} />
      <div>
        {isPending ? <p>Loading...</p> : letters.map((l) => <li>{l}</li>)}
      </div>
    </div>
  );
}
