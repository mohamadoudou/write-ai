"use client";
import {
  ChangeEvent,
  SetStateAction,
  memo,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

const List = memo(function List({ text }: { text: string }) {
  const [fakeData, setFakeData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await fetch(
          "https://jsonplaceholder.typicode.com//posts",
          {
            method: "GET",
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
            },
          }
        ).then((response) => response.json());
        console.log("Iam called", fakeData);
        setFakeData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [text]);

  return (
    <div>
      <div>My text: {text}</div>
      <div>
        <ul>
          {fakeData.map((data: any) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default function Demo() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const deferredValueText2 = useDeferredValue(text2);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    let textTest: string[] = [];
    startTransition(() => {
      for (let i = 0; i < 10000; i++) {
        textTest.push(`${1}-m`);
        setLetters(textTest);
      }
    });
  };

  return (
    <div className="mt-3">
      <div>
        <p>DeferredValue</p>
        <label htmlFor="fake-filter" className="mr-2">
          Type
        </label>
        <input
          type="text"
          name="fake-filter"
          value={text2}
          className=""
          onChange={(e) => {
            setText2(e.target.value);
          }}
        />
        <List text={deferredValueText2} />
      </div>
      <div>
        <p className="mr-2 mb-2">useTransition Demo</p>
        <label htmlFor="text" className="mr-2">
          Type Fast
        </label>
        <input type="text" name="text" className="" onChange={handleChange} />
        <div>
          {isPending ? <p>Loading...</p> : letters.map((l) => <li>{l}</li>)}
        </div>
      </div>
    </div>
  );
}
