import { useRef, useState } from "react";

export default function EventHandling() {
  const [text, setText] = useState("Hello");
  const [changeClass, setChangeClass] = useState();
  const inputBox = useRef();

  function handleClick() {
    setText(`Hello nigga ${inputBox.value}`);
  }

  function white() {
    setChangeClass(
      "px-4 py-1 text-[black] text-lg border-[1px] rounded-lg bg-slate-50"
    );
    console.log("white");
  }

  function black() {
    setChangeClass("px-4 py-1 text-slate-50 text-lg border-[1px] rounded-lg");
    console.log("black");
  }

  return (
    <div className=" w-[500px] h-[250px] text-center flex flex-col items-center justify-center gap-4 border-2 rounded-lg mt-5 px-5 py-4">
      <h1 className="font-bold text-slate-50 text-7xl">{text}</h1>
      <input
        className="block mx-auto outline-none px-3 py-2 rounded-lg w-[50%]"
        type="text"
        placeholder="What's your name?"
        ref={inputBox}
      />
      <button
        onClick={handleClick}
        onMouseOver={white}
        onMouseOut={black}
        className={changeClass}
      >
        Submit
      </button>
    </div>
  );
}
