import axios from "axios";
import { useEffect, useState } from "react";
import { ChampionCard } from "./styles";

interface ChampionSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
  types: string[];
  sprites: { front_default: string };
}

interface CardProps {
  url: string;
}

export const Card: React.FC<CardProps> = ({ url }) => {
  const [ChampSkin, setChampSkin] = useState<ChampionSkin | null>(null);

  const getSkin = async () => {
    await axios
      .get(url)
      .then(({ data }) => setChampSkin(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSkin();
  }, []);

  console.log({ ChampSkin });

  return (
    <ChampionCard>
      <img
        src="https://images.pexels.com/photos/752389/pexels-photo-752389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="dog"
      />
      <div className="data">
        <p> Golden Retriever </p>
        <div className="types"></div>
      </div>
    </ChampionCard>
  );
};
