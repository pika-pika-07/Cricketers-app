import React from "react";
import { getYearsBetweenDates } from "../utils/helper";

const PlayerCard = ({ playerInfo = {} }) => {
  const { name, type, points, rank, dob, description } = playerInfo;

  const age = getYearsBetweenDates(dob);

  return (
    <div className="p-2 m-2 border border-black w-52 h-64 hover:bg-neutral-300 cursor-pointer shadow-lg rounded-lg">
      <h2>{name}</h2>
      <h2>{type}</h2>
      <h2>{points}</h2>
      <h2>{rank}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default PlayerCard;
