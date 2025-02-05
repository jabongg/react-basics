import React, { useState } from "react";

function BackgroundChanger() {
  const [bgColor, setBgColor] = useState("bg-white"); // Default background color

  const changeBgColor = (color) => {
    setBgColor(`bg-${color}-500`);
  };

  return (
    <>
      <div className={`h-screen flex items-center justify-center flex-col space-y-4 ${bgColor}`}>
        <h1 className="text-4xl font-bold">Background Color Changer</h1>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => changeBgColor("red")}
            className="outline-none w-20 h-20 bg-red-500 hover:bg-red-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("blue")}
            className="w-20 h-20 bg-blue-500 hover:bg-blue-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("green")}
            className="w-20 h-20 bg-green-500 hover:bg-green-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("yellow")}
            className="w-20 h-20 bg-yellow-500 hover:bg-yellow-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("purple")}
            className="w-20 h-20 bg-purple-500 hover:bg-purple-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("pink")}
            className="w-20 h-20 bg-pink-500 hover:bg-pink-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("orange")}
            className="w-20 h-20 bg-orange-500 hover:bg-orange-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("teal")}
            className="w-20 h-20 bg-teal-500 hover:bg-teal-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("indigo")}
            className="w-20 h-20 bg-indigo-500 hover:bg-indigo-400 rounded-full"
          ></button>
          <button
            onClick={() => changeBgColor("lime")}
            className="w-20 h-20 bg-lime-500 hover:bg-lime-400 rounded-full"
          ></button>
        </div>
      </div>
    </>
  );
}

export default BackgroundChanger;
