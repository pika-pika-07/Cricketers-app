import React, { useEffect, useState } from "react";
import { getPlayers } from "../utils/helper";

const useFetchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const fetchPlayers = async () => {
    const data = await getPlayers();

    setPlayers(data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
  return players;
};

export default useFetchPlayers;
