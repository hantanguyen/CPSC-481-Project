import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingPage from "./LoadingPage"; 
import "./LoadingPage.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., for fetching resources or initialization)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loading screen lasts for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="App">
          <div className="form-container">
            <h2 className="form-title">Registration</h2>
            <form className="fitness-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Enter your height"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Enter your weight"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age (yr)</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" required>
                    <option value="" disabled selected>
                      Select your gender
                    </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fitnessLevel">Fitness Level</label>
                  <select id="fitnessLevel" name="fitnessLevel" required>
                    <option value="" disabled selected>
                      Select your fitness level
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="goal">Goal</label>
                  <select id="goal" name="goal" required>
                    <option value="" disabled selected>
                      Select your goal
                    </option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Endurance">Endurance</option>
                  </select>
                </div>
              </div>
              <div className="form-row single-row">
                <button type="submit" className="submit-btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
