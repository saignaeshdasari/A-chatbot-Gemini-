import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { runGemini } from "../../config/gemini";

const Main = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  async function handleSend() {
    if (!input.trim()) return;

    setResponse("Thinking...");

    try {
      const aiResponse = await runGemini(input);
      setResponse(aiResponse);
    } catch (error) {
      setResponse("Error: Could not fetch response.");
      console.error(error);
    }
  }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">

        <div className="greet">
          <p>
            <span>Hello, Dev...</span>
          </p>
          <p>How can I help you today?</p>
        </div>

       
        {response && (
          <div className="response-box">
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        )}

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

    
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt="send"
                onClick={handleSend}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <p className="bottom-info">
            Gemini may provide inaccurate info, including about people, so
            double-check its responses!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
