import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPlayerDetails } from "../utils/helper";

const useFetchPlayerDetails = () => {
  const [searchParams] = useSearchParams();
  const playerId = searchParams.get("id");
  const [playerDetails, setPlayerDetails] = useState([]);

  const fetchPlayerDetails = async () => {
    // Redux can be used here to fetch data
    // Not using redux as integrating redux is an expensive operation just for a single use case
    const data = await getPlayerDetails(playerId);
    setPlayerDetails(data);
  };

  useEffect(() => {
    fetchPlayerDetails();
  }, []);
  return playerDetails;
};

export default useFetchPlayerDetails;
