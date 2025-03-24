import React, { useState } from "react";
import jsQuestions from './API';
import './Javascript.css';

const JavaScriptPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    if (topic) {
      setDisplayedQuestions(jsQuestions[topic]);
    } else {
      setDisplayedQuestions([]);
    }
  };

  return (
    <div className="javascript">
      <h1 id="jsp-h1">JavaScript Questions</h1>
      
      <div className="js-content">
      
        {/* Dropdown to select topic */}
        <label className="js-dropdown">
          <p id="jsp-para">
            Discover 180+ JavaScript coding questions across 17 key topics, from basics like variables and loops to advanced concepts like closures and async programming. Practice with real-world challenges in arrays, objects, DOM manipulation, ES6 features, and more. Perfect for beginners and experts to master JavaScript!
          </p>

          <h2 id="js-dropdown-h2">Select Topic:</h2>
          {/* Select Topic:  */}
          <select value={selectedTopic} onChange={handleTopicChange} className="javascript-choose-section">
            <option value="" className="javascript-topic-section">--Choose Topic--</option>
            {Object.keys(jsQuestions).map((topic) => (
              <option key={topic} value={topic} className="jsts-showcase">
                {topic}
              </option>
            ))}
          </select>
        </label>
  
        {/* Render questions */}
        <div className="questions">
          {displayedQuestions.length > 0 ? (
            <ul className="question-box">
              {displayedQuestions.map((q) => (
                <li key={q.id}>
                  <strong id="question-render">{q.question}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p id="Select-topic">Select a topic to view questions.</p>
          )}
        </div>
     </div>
    </div>
  );
};

export default JavaScriptPage;