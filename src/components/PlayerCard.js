import React from "react";

const PlayerCard = ({ playerInfo = {} }) => {
  const { name, type, points, rank, dob, description } = playerInfo;
  return (
    <div className="p-2 m-2 border border-black w-52 h-64">
      <h2>{name}</h2>
      <h2>{type}</h2>
      <h2>{points}</h2>
      <h2>{rank}</h2>
      <h2>{dob}</h2>
    </div>
  );
};

export default PlayerCard;
