import React, { useState } from "react";
import { tossContext } from "./tossContext";

function TossProvider({ children }) {
  const [tossWinner, setTossWinner] = useState(null);
  const [tossDecision, setTossDecision] = useState(null);

  return (
    <tossContext.Provider value={{ tossWinner, setTossWinner, tossDecision, setTossDecision }}>
      {children}
    </tossContext.Provider>
  );
}

export default TossProvider;
