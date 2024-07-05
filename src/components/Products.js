import React, { useState } from "react";

export default function Product() {
  const [text, setText] = useState("");
 

  const isBirthdayLucky = () => {
    let dob = document.getElementById("date-of-birth");
    let luckynumber = document.getElementById("lucky-number");
    let luckynumberValue = luckynumber.value;
    // console.log(typeof dob.value, typeof luckynumber.value);
    const dateofbirth = dob.value;
    let sum = calculateSum(dateofbirth);
    console.log(dateofbirth, sum, luckynumberValue);
    if (sum && luckynumberValue) {
      if (sum % luckynumberValue === 0) {
        setText(`Hurrah! ${luckynumberValue} is luckynumber for you`);
        // setText({luckynumberValue}+"is luckynumber for you")/
      } else {
        setText(`sorry! ${luckynumberValue} is not a luckynumber for you`);
      }
    } else {
      setText("please enter both the fields");
    }
  };
  function calculateSum(dateofbirth) {
    let dobF = dateofbirth.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dobF.length; index++) {
      sum = sum + Number(dobF.charAt(index));
    }
    return sum;
  }

  return (
    <div>
      <div className="container">
        <h3 className="text-bg-secondary p-3">
          ULTIMATE LUXURY
          <small className="text-body-secondary display-1 ">
            {" "}
            OUR PRODUCTS
          </small>
        </h3>
        <div className="container text-bg-primary mt-0" >
          <div className="container-fluid text-center">
            <div className="row justify-content-evenly ">
              <div className="col-6">
                <label htmlFor="date-of-birth">Enter your bithday :</label>
                <input type="date" name="" id="date-of-birth" />
              </div>
              <div className="col-6">
                <label htmlFor="lucky-number">Enter your lucky number :</label>
                <input type="number" id="lucky-number" />
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                <div className="col-12">
                  {" "}
                  <textarea
                    name=""
                    id="output-box"
                    cols="100"
                    rows="3"
                    disabled
                    value={text}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center mb-4">
            <button
              type="button"
              className="btn btn-success"
              onClick={isBirthdayLucky}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
