import { SAVE_ASTEROIDS_DATA } from "./types";
import { AsteroidObject } from "../../api/types";
import { ObjectData } from "../../pages/AsteroidsPage/types";

export const saveAsteroidsData = (data: AsteroidObject) => {
  const array: any = Object.values(data?.near_earth_objects)[0];
  let i = 1;
  const datasets: object[] = [];
  array.map((item: ObjectData) => {
    datasets.push({
      label: item?.name,
      backgroundColor: "black",
      data: [
        {
          x: i++,
          y: +item?.close_approach_data[0].miss_distance.astronomical,
          r:
            (+item?.estimated_diameter.meters.estimated_diameter_min +
              +item?.estimated_diameter.meters.estimated_diameter_max) /
            20,
        },
      ],
    });
  });

  return {
    type: SAVE_ASTEROIDS_DATA,
    payload: datasets,
  };
};
