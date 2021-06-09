export type ObjectData = {
  name: string;
  close_approach_data: ApproachObject[];
  estimated_diameter: {
    meters: {
      estimated_diameter_min: string;
      estimated_diameter_max: string;
    };
  };
  [key: number]: object;
};

export interface ApproachObject {
  miss_distance: { astronomical: string };
}

export interface Data {
  near_earth_objects: ObjectData;
}
