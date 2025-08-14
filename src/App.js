// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const heritageTexts = [
    "Traditional festivals and celebrations",
    "Rich cultural artisans and crafts",
    "Himalayan wisdom and stories",
    "Delicious authentic cuisine"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.5;
      });
    }, 100);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % heritageTexts.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
      <div className="app-container">
        <div className="background-decorations">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>

        <div className="content">
          <div className="title-section">
            <h1 className="nepali-title">नेपाली</h1>
            <h2 className="english-title">NEPALI HERITAGE</h2>
          </div>

          <div className="subtitle-section">
            <p className="main-subtitle">We are bringing Nepali heritage to you</p>
            <div className="rotating-text">
              <p className="heritage-text">{heritageTexts[currentText]}</p>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-bar">
              <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="progress-text">Loading... {Math.round(progress)}%</p>
          </div>

          <div className="dots-container">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>

          <div className="footer-section">
            <p className="nepali-quote">"सबै भन्दा राम्रो धन भनेको संस्कृति हो"</p>
            <p className="quote-translation">"Culture is the greatest treasure"</p>
          </div>
        </div>

        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>
  );
}

export default App;