import { ApodObject, ApolloObject, AsteroidObject } from "./types";

const API_KEY = "bkZUTwvHSL9b8G5QxhAJF0ElKIpknLLJDiQEVbNf";

export const fetchRequest = (): Promise<ApodObject> => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(
    (r) => r.json()
  );
};

export const fetchApolloMission = (): Promise<ApolloObject> => {
  return fetch("https://images-api.nasa.gov/asset/Apollo 11 Overview").then(
    (r) => r.json()
  );
};

export const fetchAsteroidsData = (date: string): Promise<AsteroidObject> => {
  return fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${API_KEY}`
  ).then((r) => r.json());
};
