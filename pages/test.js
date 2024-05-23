// pages/test.js
import React from "react";
import AnimatedText from "../component/AnimatedText.tsx";
export default function Test() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        Scroll down to see the animation
      </div>
      <div className="h-screen flex justify-center items-center">
        Scroll down to see the animation
      </div>
      <div className="h-screen flex justify-center items-center">
        Scroll down to see the animation
      </div>
      <div className="h-screen flex justify-center items-center">
        Scroll down to see the animation
      </div>
      <AnimatedText>
        <div className="h-screen"></div>
      </AnimatedText>
    </div>
  );
}
