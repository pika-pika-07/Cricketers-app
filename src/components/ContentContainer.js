import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import {
  getPlayers,
  sortPlayers,
  filterPlayersByType,
  filterPlayersByName,
} from "../utils/helper";

const ContentContainer = () => {
  const [players, setPlayers] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [playersToShow, setPlayersToShow] = useState([10]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");
  const filterBy = searchParams.get("filter");
  const searchBy = searchParams.get("search");

  useEffect(() => {
    fetchCricketers();
  }, []);

  useEffect(() => {
    filterPlayers(players);
  }, [sortBy, filterBy, searchBy]);

  const filterPlayers = (players) => {
    if (!sortBy && !filterBy && !searchBy && allPlayers.length > 0) {
      setPlayers(allPlayers);
    }

    if (sortBy) {
      const newList = [...allPlayers];
      const sortedPlayers = sortPlayers(newList, sortBy);
      setPlayers(sortedPlayers);
    }
    if (filterBy) {
      const filteredPlayers = filterPlayersByType(allPlayers, filterBy);
      setPlayers(filteredPlayers);
    }
    if (searchBy) {
      const filteredPlayers = filterPlayersByName(allPlayers, searchBy);
      setPlayers(filteredPlayers);
    }
  };
  const fetchCricketers = async () => {
    const data = await getPlayers();
    setAllPlayers(data);
    setPlayers(data);
    filterPlayers(data);
  };

  const handleShowMore = () => {
    setPlayersToShow(playersToShow < players.length ? players.length : 10);
  };

  if (players.length === 0) return <div>Loading</div>;
  return (
    <>
      <div className="flex p-6 m-6  flex-wrap">
        {players.slice(0, playersToShow).map((player) => {
          return (
            <Link key={player.id} to={`player?id=${player.id}`}>
              {" "}
              <PlayerCard playerInfo={player} />
            </Link>
          );
        })}
      </div>
      <div className="border border-black w-[7%] m-3 p-3 mx-14">
        <button onClick={handleShowMore}>
          {playersToShow === players.length ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ContentContainer;
