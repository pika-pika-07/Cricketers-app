import { data } from "browserslist";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetchPlayerDetails from "../hooks/useFetchPlayerDetails";
import { getYearsBetweenDates } from "../utils/helper";

const PlayerDetails = () => {
  const [searchParams] = useSearchParams();
  const playerId = searchParams.get("id");
  const player = useFetchPlayerDetails(playerId);
  const { name, description, type, points, dob, rank } = player;
  return (
    <div className="flex  flex-col p-4 m-4">
      <Link to="/">
        <a className="font-bold underline text-blue-600 hover:text-blue-800">
          {" "}
          Back to Cricketers
        </a>
      </Link>
      <h2 className="font-bold mb-8 mt-8"> Player Details </h2>
      <div className="flex flex-col gap-5">
        <div>
          <span className="font-bold">Name</span> : {name}
        </div>
        <div>
          <span className="font-bold">Description</span> : {description}
        </div>
        <div>
          <span className="font-bold">Type</span> : {type}
        </div>
        <div>
          <span className="font-bold">Points</span> : {points}
        </div>
        <div>
          <span className="font-bold">DOB</span> :{" "}
          {new Date(dob).toDateString()}
        </div>
        <div>
          <span className="font-bold">Age</span> : {getYearsBetweenDates(dob)}
        </div>
        <div>
          <span className="font-bold">Rank</span> : {rank}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
