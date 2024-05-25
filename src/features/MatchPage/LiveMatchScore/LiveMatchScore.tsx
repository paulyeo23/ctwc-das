import React, { useEffect, useState } from "react";
import { PlayerNamesAndScores } from "./PlayerNameAndScore/PlayerNameAndScore";
import { ScoreBoard } from "./ScoreBoard/Scoreboard";
import { BestOfScore } from "./BestOfScore/BestOfScore";

export const LiveMatchScore: React.FC = () => {
  return (
    <table className="table-auto w-full mt-2 mx-0.5 p-2.5 bg-white">
      <thead>
        <tr>
          <PlayerNamesAndScores />
        </tr>
      </thead>
      <tbody>
        <tr>
          <ScoreBoard />
        </tr>
        <tr>
          <BestOfScore />
        </tr>
      </tbody>
    </table>
  );
};
