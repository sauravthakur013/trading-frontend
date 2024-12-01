import React, { act } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { motion, AnimatePresence } from "framer-motion";

function AccountLoginPage() {
  const [activePage, setActivePage] = React.useState("signin");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: 100,
      }}
    >
      <div
        style={{
          animationDuration: "0.5s",
          animationTimingFunction: "ease-in-out",
          transform:
            activePage === "signin" ? "translateX(50%)" : "translateX(-200%)",
          transition: "transform 0.5s ease-in-out", // Smooth transition
        }}
      >
        <SignIn setActivePage={setActivePage} />
      </div>
      <div style={{ 
        animationDuration: "0.5s",
          animationTimingFunction: "ease-in-out",
          transform:
            activePage === "signin" ? "translateX(200%)" : "translateX(-50%)",
          transition: "transform 0.5s ease-in-out", // Smooth transition
        }}>
        <SignUp setActivePage={setActivePage} />
      </div>
    </div>
  );
}

export default AccountLoginPage;
