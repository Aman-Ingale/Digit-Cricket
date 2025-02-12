import React, { useState } from "react";
import { teamContext } from "./teamContext";

function TeamProvider({ children }) {
  const [UserTeam, setUserTeam] = useState(null);
  const [CompTeam, setCompTeam] = useState(null);

  return (
    <teamContext.Provider value={{ UserTeam, setUserTeam, CompTeam, setCompTeam }}>
      {children}
    </teamContext.Provider>
  );
}

export default TeamProvider;
