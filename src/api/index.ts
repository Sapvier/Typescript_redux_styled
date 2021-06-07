export const fetchRequest = (): Promise<any> => {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=bkZUTwvHSL9b8G5QxhAJF0ElKIpknLLJDiQEVbNf"
  ).then((r) => r.json());
};
