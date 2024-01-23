import { useState, useRef, useEffect } from "react";

export default function Form() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const { fName: ngan, lName: apilido, email: emilyano } = userDetails;

  function handleFirstName(e) {
    const firstName = e.target.value;

    setUserDetails((prevState) => {
      return {
        fName: firstName,
        lName: prevState.lName,
        email: prevState.email,
      };
    });
  }

  function handleSurname(e) {
    const surname = e.target.value;
    setUserDetails((prevState) => {
      return { fName: prevState.fName, lName: surname, email: prevState.email };
    });
  }
  console.log(userDetails);

  function handleEmail(e) {
    setUserDetails((prevState) => {
      return {
        fName: prevState.fName,
        lName: prevState.lName,
        email: e.target.value,
      };
    });
  }

  function displayName(e) {}

  function unSubmit(e) {}

  // let context = `Hello`;
  // if (!fName.trim() || !lName.trim()) {
  //   context = "Hello";
  //   alert("Please input Full Name");
  // } else if (fName.trim() && !fName) {
  //   context = `Hello ${fName}`;
  // } else if (lName.trim() && !fName.trim()) {
  //   alert("please input a first Name");
  // }

  return (
    <form className="flex-col justify-center items-center">
      <div className="w-[500px] border-white text-slate-50 text-xl mt-4 flex-col items-center justify-between text-center bg-slate-500 rounded-xl px-10 py-5 gap-[50px]">
        <h1 className="">
          {" "}
          Hello{" "}
          {`${userDetails.fName} ${userDetails.lName}, your Email is ${userDetails.email}`}
        </h1>
        <input
          type="text"
          placeholder="First Name"
          className="block mx-auto outline-none rounded-lg text-black ps-2 py-1 mt-5 capitalize"
          onChange={(e) => handleFirstName(e)}
          value={userDetails.fName}
        />
        <input
          type="text"
          placeholder="Surname"
          className="block mx-auto outline-none rounded-lg text-black ps-2 py-1 mt-5 capitalize"
          onChange={(e) => handleSurname(e)}
          value={userDetails.lName}
        />

        <input
          type="text"
          placeholder="Email"
          className="block mx-auto outline-none rounded-lg text-black ps-2 py-1 mt-5"
          onChange={(e) => handleEmail(e)}
          value={userDetails.email}
        />

        <button
          onClick={(e) => displayName(e)}
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
