import { useState } from "react";
import Stepper, { Step } from "./components/Stepper";
import { motion } from "motion/react";
import SplitText from "./components/SplitText";
import DarkVeil from "./components/DarkVeil";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  const handleNext = (step) => {
    if (step === 2) {
      if (username !== "admin") {
        setUserError("Username is incorrect");
        return false;
      }
    }

    if (step === 3) {
      if (password !== "admin") {
        setPassError("Password is incorrect");
        return false;
      }
    }

    setUserError("");
    setPassError("");
    return true;
  };
  return (
         
    // ✅ Main relative container
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
     <div
  style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5
  }}
>
  <Stepper
  onNext={(nextStep) => {
    if (nextStep === 2 && username !== "admin") {
      setUserError("Username is incorrect");
      return false;
    }

    if (nextStep === 3 && password !== "admin") {
      setPassError("Password is incorrect");
      return false;
    }

    setUserError("");
    setPassError("");
    return true;
  }}
>
      {/* STEP 1 */}
      <Step>
        <h2>Welcome to College Portal</h2>
        <p>Login to continue…</p>
      </Step>

      {/* STEP 2 */}
      <Step>
        <h2>Username</h2>
        <input
          className="input-box"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUserError("");
          }}
          placeholder="Enter username"
        />
        {userError && <p className="error-text">{userError}</p>}
      </Step>

      {/* STEP 3 */}
      <Step>
        <h2>Password</h2>
        <input
          type="password"
          className="input-box"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPassError("");
          }}
          placeholder="Enter password"
        />
        {passError && <p className="error-text">{passError}</p>}
      </Step>

      {/* STEP 4 */}
      <Step>
        <h2>You have successfully logged in!</h2>
        <p>Click Finish to Continue..</p>
      </Step>
    </Stepper>
</div>
    
      {/* 🔥 DarkVeil Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0
        }}
      >
        <DarkVeil
          speed={0.8}
          warpAmount={0.2}
          noiseIntensity={0.02}
        />
      </div>

      {/* 🏫 Top-left College Name (SplitText) */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "20px",
          zIndex: 10
        }}
      >
        <SplitText
  text="SANJAY GANDHI POLYTECHNIC"
  splitType="chars"
  delay={40}
  duration={1.2}
  from={{ opacity: 0, y: 30 }}
  to={{ opacity: 1, y: 0 }}
  style={{
    fontSize: "25px",
    fontWeight: "700",
    color: "white",
    letterSpacing: "2px"
  }}
/>
      </div>

      </div>
      
  );
}

export default App;
