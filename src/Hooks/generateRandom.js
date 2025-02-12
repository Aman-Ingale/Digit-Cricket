import React from "react";
const generateRandom = (max, min) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
export default generateRandom