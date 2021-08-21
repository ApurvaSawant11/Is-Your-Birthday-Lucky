import { useState } from "react";
import "./styles.css";
import balloon from "/src/bg6.jpg";

let dateInput = "";
let luckyNo = 0;

const luckyImg = (
  <img
    src="https://media.giphy.com/media/SVYnISz8VwSFTsOX9k/giphy.gif"
    alt="unluckyImg"
    width="100%"
    height="200px"
  />
);
const unluckyImg = (
  <img
    src="https://media.giphy.com/media/WqGD3RK8he88zbbvB5/source.gif"
    alt="unluckyImg"
    width="100%"
    height="200px"
  />
);

export default function App() {
  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    e.preventDefault();

    let dateArray = dateInput.split("-");

    let sum = 0;

    dateArray.map((num) => {
      for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Yay!! You are Lucky! 😍🥳 ", luckyImg]);
    } else {
      setDisplayResult([
        "Oops! Your birthday is not a Lucky number😣",
        unluckyImg
      ]);
    }
  }

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${balloon})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          color: "#f5f5f5"
        }}
      >
        <div className="banner">
          <h1>Is Your Birthday Lucky?</h1>
        </div>
        <div id="formSection">
          <section>
            <form onSubmit={checkBtnHandler}>
              <p id="notice">
                <strong>Privacy Note!</strong> We do not store your data.
              </p>
              <p id="about">
                Let's check if your birthday is lucky or not. Enter your DoB
                along with your lucky number.
              </p>
              <label>Enter your Date of Birth:</label>
              <input
                id="dateInput"
                onChange={(e) => {
                  dateInput = e.target.value;
                }}
                type="date"
                required
              />
              <label>Enter your Lucky No. :</label>
              <input
                id="luckyNoInput"
                onChange={(e) => {
                  luckyNo = e.target.value;
                }}
                type="number"
                required
              />
              <button id="submit" type="submit">
                Check
              </button>
              <div>
                <div className="output">{displayResult[0]}</div>
                {displayResult[1]}
              </div>
            </form>
          </section>
        </div>

        <footer>
          <ul>
            <li class="footerLink">
              <a href="https://github.com/ApurvaSawant11" target="_blank">
                <i class="fab fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li class="footerLink">
              <a href="https://twitter.com/ApurvaSawant11" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
            </li>

            <li class="footerLink">
              <a
                href="https://www.linkedin.com/in/apurvasawant11"
                target="_blank"
              >
                <i class="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>

            <li class="footerLink">
              <a href="https://apurvasawant11.netlify.app/" target="_blank">
                <i class="fas fa-briefcase fa-2x"></i>
              </a>
            </li>
          </ul>

          <p>Made with ❤️ by Apurva Sawant</p>
        </footer>
      </div>
    </div>
  );
}
