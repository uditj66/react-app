import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("MOUSE clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("success", "Converted to uppercase!!");
  };
  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("success", "Converted to lowercase!!");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("danger", "Cleared!!");
  };
  const handleExtraSpaceClick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("warning", "Extra space removed!!");
  };
  const handleCopyTextClick = () => {
    let newtext = document.getElementById("floatingInput1");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("success", "Copied to clipboard!!");
  };

  const handleTrimClick = () => {
    let newtext = text.trim();
    console.log(newtext);
    setText(newtext);
  };

  function handleOnChange(event) {
    console.log("handled !");
    setText(event.target.value);
  }

  return (
    <>
      <h1>{props.heading}</h1>

      <div className="container">
        <fieldset>
          <legend>CREDENTIALS :</legend>
        </fieldset>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput1"
            placeholder="please write to us"
            value={text}
            onChange={handleOnChange}
            style={{ height: 100, width: 1300 }}
          />
          <label htmlFor="floatingInput1">please write to us</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary " onClick={handleUpClick}>
          CLICK FOR UPPERCASE
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>
          CLICK FOR LOWERCASE
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleClearClick}
        >
          CLICK TO CLEAR
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleExtraSpaceClick}
        >
          REMOVE EXTRA SPACE
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleCopyTextClick}
        >
          COPY TEXT
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleTrimClick}>
          TRIM THE TEXT
        </button>
      </div>

      <div className="container">
        <h2>YOUR SUMMARY</h2>
        <p>
          {text.split(" ").length}words & {text.length} characters
        </p>
        <h2>TIME TO READ THE ABOVE TEXT</h2>
        <p>{0.008 * text.length} minutes</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
