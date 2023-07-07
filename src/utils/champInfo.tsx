import { baseUrl } from "../constants";

export const getChampsSplash = (id: string) => {
  try {
    const imageUrl = `${baseUrl}${id}_0.jpg`;
    return imageUrl;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
