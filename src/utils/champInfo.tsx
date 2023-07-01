import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";
import { useChampsData } from "../hooks/useChampsData";

export const getChampsSplash = (id: string) => {
  try {
    const imageUrl = `${baseUrl}${id}_0.jpg`;
    return imageUrl;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
