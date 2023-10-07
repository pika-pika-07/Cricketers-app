import React from "react";
import { getYearsBetweenDates } from "../utils/helper";

const PlayerCard = ({ playerInfo = {} }) => {
  const { name, type, points, rank, dob, description } = playerInfo;

  const age = getYearsBetweenDates(dob);
  debugger;
  //   const date = new Date(dob);
  //   console.log(date);
  //   const currentDate = new Date();
  //   console.log(currentDate);
  //   const timeDiff = currentDate.getTime() - date.getTime();
  //   const days = timeDiff / (1000 * 3600 * 24);
  //   const years = Math.abs(Math.round(days / 365));

  return (
    <div className="p-2 m-2 border border-black w-52 h-64">
      <h2>{name}</h2>
      <h2>{type}</h2>
      <h2>{points}</h2>
      <h2>{rank}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default PlayerCard;
