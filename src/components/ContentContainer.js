import React, { useEffect } from "react";
import useFetchPlayers from "../hooks/useFetchPlayers";
import PlayerCard from "./PlayerCard";

const ContentContainer = () => {
  const players = useFetchPlayers();

  if (players.length === 0) return <div>Loading</div>;
  return (
    <div className="flex p-6 m-6  flex-wrap">
      {players.map((player) => {
        return <PlayerCard key={player.id} playerInfo={player} />;
      })}
    </div>
  );
};

export default ContentContainer;
