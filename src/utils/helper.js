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
export const getPlayerDetails = (playerId) => {
  //Redux or context can be used to avoid it
  return Promise.resolve(
    data
      .sort((a, b) => {
        return a.points === b.points ? 0 : b.points > a.points ? 1 : -1;
      })
      .map((it, index) => ({
        ...it,
        rank: index + 1,
      }))
      .find((player) => player.id === playerId)
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
  return yearsDiff;
};

export const getObjectFromSearchParams = (params = {}) => {
  let obj = {};
  params.forEach((key, value) => {
    obj[value] = key;
  });
  return obj;
};

export const applyFilters = (playersData, sortBy, filterBy, search) => {
  let newList = [...playersData];
  if (sortBy && sortBy !== "all") {
    newList.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "rank") {
        return a.points - b.points;
      } else if (sortBy === "age") {
        return b.dob - a.dob;
      }
    });
  }

  if (filterBy) {
    if (filterBy !== "all") {
      newList = newList.filter((player) => player.type === filterBy);
    }
  }
  if (search) {
    if (search !== "all") {
      newList = newList.filter((player) => player.name.includes(search));
    }
  }

  return newList;
};
