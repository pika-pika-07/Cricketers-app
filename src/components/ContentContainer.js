import React, { useEffect } from "react";
import useFetchPlayers from "../hooks/useFetchPlayers";
import PlayerCard from "./PlayerCard";

const ContentContainer = () => {
  const players = useFetchPlayers();
  return (
    <div className="flex p-6 m-6  flex-wrap">
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </div>
  );
};

export default ContentContainer;
