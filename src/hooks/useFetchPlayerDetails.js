import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPlayerDetails } from "../utils/helper";

const useFetchPlayerDetails = () => {
  const [searchParams] = useSearchParams();
  const playerId = searchParams.get("id");
  const [playerDetails, setPlayerDetails] = useState([]);

  const fetchPlayerDetails = async () => {
    const data = await getPlayerDetails(playerId);
    setPlayerDetails(data);
  };

  useEffect(() => {
    fetchPlayerDetails();
  }, []);
  return playerDetails;
};

export default useFetchPlayerDetails;
