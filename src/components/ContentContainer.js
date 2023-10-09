import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchPlayers from "../hooks/useFetchPlayers";
import PlayerCard from "./PlayerCard";
import {
  getPlayers,
  sortPlayers,
  filterPlayersByType,
  filterPlayersByName,
} from "../utils/helper";

const ContentContainer = () => {
  const [players, setPlayers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");
  const filterBy = searchParams.get("filter");
  const searchBy = searchParams.get("search");

  const filterPlayers = (players) => {
    if (sortBy) {
      const newList = [...players];
      const sortedPlayers = sortPlayers(newList, sortBy);
      setPlayers(sortedPlayers);
    }
    if (filterBy) {
      // const newList = [...players];
      const filteredPlayers = filterPlayersByType(players, filterBy);
      setPlayers(filteredPlayers);
    }
    if (searchBy) {
      const filteredPlayers = filterPlayersByName(players, searchBy);
      setPlayers(filteredPlayers);
    }
  };
  const fetchCricketers = async () => {
    const data = await getPlayers();
    setPlayers(data);
    filterPlayers(data);
  };
  useEffect(() => {
    fetchCricketers();
  }, []);

  useEffect(() => {
    filterPlayers(players);
  }, [sortBy, filterBy, searchBy]);

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
