import data from "./players";

export const getPlayers = (args) => {
  return Promise.resolve(
    data
      .sort((a, b) => {
        const aPoints = a.points ?? 0;
        const bPoints = b.points ?? 0;

        return aPoints === bPoints ? 0 : bPoints > aPoints ? 1 : -1;
      })
      .map((it, index) => ({
        ...it,
        rank: index + 1,
      }))
      .filter((it) => (args?.type ? it.type === args?.type : true))
  );
};

export const getYearsBetweenDates = (input) => {
  if (!input) return 0;

  // Convert input to Date
  const date = new Date(input);

  // Current Date
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - date.getTime();
  const days = timeDiff / (1000 * 3600 * 24);
  const yearsDiff = Math.abs(Math.round(days / 365));
  console.log(yearsDiff);
  return yearsDiff;
};

export const sortPlayers = (players, sortBy) => {
  const newArray = players.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "rank") {
      return a.points - b.points;
    } else if (sortBy === "age") {
      return b.dob - a.dob;
    }
  });

  return newArray;
};
