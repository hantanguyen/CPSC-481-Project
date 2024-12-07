import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingPage from "./LoadingPage";
import "./LoadingPage.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  const dummyWorkoutPlan = [
    {
      day: "Monday",
      exercises: [
        { name: "Dumbbell Bench Press", sets: 3, reps: "10,8,6", weight: "10 lbs", rest: "60s" },
        { name: "Dumbbell Bicep Curl", sets: 3, reps: "10,8,6", weight: "10 lbs", rest: "60s" },
        { name: "Seated Overhead Tricep Extension", sets: 3, reps: "10,8,6", weight: "10 lbs", rest: "60s" },
      ],
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Barbell Squat", sets: 3, reps: "12,10,8", weight: "50 lbs", rest: "90s" },
        { name: "Walking Lunges", sets: 3, reps: "10 each leg", weight: "20 lbs", rest: "60s" },
        { name: "Romanian Deadlift", sets: 3, reps: "12,10,8", weight: "40 lbs", rest: "90s" },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        { name: "Pull-Ups", sets: 3, reps: "8,6,4", weight: "Bodyweight", rest: "90s" },
        { name: "Barbell Row", sets: 3, reps: "12,10,8", weight: "40 lbs", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "15,12,10", weight: "10 lbs", rest: "60s" },
      ],
    },
    {
      day: "Thursday",
      exercises: [
        { name: "Incline Dumbbell Press", sets: 3, reps: "12,10,8", weight: "15 lbs", rest: "90s" },
        { name: "Dumbbell Flyes", sets: 3, reps: "12,10,8", weight: "10 lbs", rest: "60s" },
        { name: "Tricep Pushdowns", sets: 3, reps: "15,12,10", weight: "10 lbs", rest: "60s" },
      ],
    },
    {
      day: "Friday",
      exercises: [
        { name: "Deadlift", sets: 3, reps: "8,6,4", weight: "100 lbs", rest: "2 min" },
        { name: "Leg Press", sets: 3, reps: "12,10,8", weight: "120 lbs", rest: "90s" },
        { name: "Calf Raises", sets: 3, reps: "20,18,15", weight: "Bodyweight", rest: "60s" },
      ],
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Arnold Press", sets: 3, reps: "12,10,8", weight: "15 lbs", rest: "90s" },
        { name: "Lateral Raises", sets: 3, reps: "15,12,10", weight: "10 lbs", rest: "60s" },
        { name: "Front Raises", sets: 3, reps: "12,10,8", weight: "10 lbs", rest: "60s" },
      ],
    },
    {
      day: "Sunday",
      exercises: [
        { name: "Plank", sets: 3, reps: "Hold 60s", weight: "Bodyweight", rest: "60s" },
        { name: "Russian Twists", sets: 3, reps: "20 each side", weight: "10 lbs", rest: "60s" },
        { name: "Mountain Climbers", sets: 3, reps: "30 each leg", weight: "Bodyweight", rest: "60s" },
      ],
    },
  ];  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loading screen lasts for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="App">
          {!isRegistered ? (
            <div className="form-container">
              <h2 className="form-title">Registration</h2>
              <form className="fitness-form" onSubmit={handleRegister}>
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
          ) : (
            <div className="workout-plan">
              <h1>Your Weekly Exercise</h1>
              {dummyWorkoutPlan.map((dayPlan, index) => (
                <div key={index} className="day-section">
                  <h2>{dayPlan.day}</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Rest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dayPlan.exercises.map((exercise, idx) => (
                        <tr key={idx}>
                          <td>{exercise.name}</td>
                          <td>{exercise.sets}</td>
                          <td>{exercise.reps}</td>
                          <td>{exercise.weight}</td>
                          <td>{exercise.rest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
