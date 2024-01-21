import { useState, useRef } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const userInputRef = useRef("");

  function displayName(e) {
    e.preventDefault();
    setName(text);
  }

  function unSubmit(e) {
    e.preventDefault();
    setName("");
    setText("");
  }

  console.log(text);

  return (
    <form className="flex-col justify-center items-center">
      <div className="w-[500px] h-[300px] border-white text-slate-50 text-3xl mt-4 flex-col items-center justify-between text-center bg-slate-500 rounded-xl px-10 py-5 gap-[50px]">
        {/* <h1 className="">{text == "" ? `Hello` : `Hello, ${text}`}</h1> */}

        <h1 className=""> {!name.trim() ? "Hello" : "Hello, " + name} </h1>
        <input
          type="text"
          placeholder="Nigga"
          className="block mx-auto outline-none rounded-lg text-black ps-2 py-1 mt-5"
          onChange={(e) => setText(e.target.value)}
          ref={userInputRef}
          value={text}
        />
        <button
          onClick={displayName}
          className="block mx-auto border-white border-2 px-3 py-1 rounded-lg my-5"
        >
          Submit
        </button>
        <button
          className="block mx-auto border-white border-2 px-3 py-1 rounded-lg"
          onClick={unSubmit}
        >
          Unsubmit
        </button>
      </div>
    </form>
  );
}
