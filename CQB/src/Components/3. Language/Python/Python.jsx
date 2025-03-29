import React, { useEffect, useState } from "react";
import pythonquestion from "./pyAPI";

const PythonPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [completedQuestions, setCompletedQuestions] = useState(() => {
    return JSON.parse(localStorage.getItem("completedQuestions")) || {};
  })

  useEffect(() => {
    localStorage.setItem("completedQuestions",JSON.stringify(completedQuestions));
  }, [completedQuestions]);


  const handleTopicChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    if (topic) {
      setDisplayedQuestions(pythonquestion[topic]);
    } else {
      setDisplayedQuestions([]);
    }
  };


  const handleCheckboxChange = (topic, id) => {
    setCompletedQuestions((prev) => {
      const updated = {
        ...prev,
        [topic]: {
          ...prev[topic],
          [id]: !prev[topic]?.[id],
        },
      };

      localStorage.setItem("completedQuestions", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="javascript">
      <h1 id="jsp-h1">Python Questions</h1>
      
      <div className="js-content">
      
        {/* Dropdown to select topic */}
        <label className="js-dropdown">
          <p id="jsp-para">
          200+ Python questions with code, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting confidence!
          </p>

          <h2 id="js-dropdown-h2">Select Topic:</h2>
          {/* Select Topic:  */}
          <select value={selectedTopic} onChange={handleTopicChange} className="javascript-choose-section">
            <option value="" className="javascript-topic-section">--Choose Topic--</option>
            {Object.keys(pythonquestion).map((topic) => (
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
                <li key={q.id} className={completedQuestions[selectedTopic]?.[q.id] ? "completed" : ""}>
                  <label className="custom-checkbox">
                    <input 
                    type="checkbox"
                    checked={!!completedQuestions[selectedTopic]?.[q.id]} 
                    onChange={() => handleCheckboxChange(selectedTopic, q.id)}
                      />
                    <span className="checkmark"></span>  
                  </label>
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

export default PythonPage;