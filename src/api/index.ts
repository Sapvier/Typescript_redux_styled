export const fetchRequest = (): Promise<any> => {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=bkZUTwvHSL9b8G5QxhAJF0ElKIpknLLJDiQEVbNf"
  ).then((r) => r.json());
};

export const fetchApolloMission = () => {
  return fetch("https://images-api.nasa.gov/asset/Apollo 11 Overview").then(
    (r) => r.json()
  );
};
