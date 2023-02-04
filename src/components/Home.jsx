import React, { useState } from "react";
import CardData from "./CardData";
import Squad from "../api";
import "../style.css";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const [player, setPlayer] = useState(Squad);

  const filterPlayer = (category) => {
    const updatePlayer = Squad.filter((currEle) => {
      return currEle.category == category;
    });

    setPlayer(updatePlayer);
  };

  return (
    <div>
      <nav className="navbar">
        <Flex
          listStyleType="none"
          p="12"
          justifyContent="center"
          gap="12"
          fontSize="2xl"
          cursor="pointer"
        >
          <li className="item-list" onClick={() => filterPlayer("Batsman")}>
            Batsman
          </li>
          <li className="item-list" onClick={() => filterPlayer("Bowler")}>
            Bowler
          </li>
          <li className="item-list" onClick={() => filterPlayer("All-Rounder")}>
            All-Rounder
          </li>
          <li className="item-list" onClick={() => setPlayer(Squad)}>
            Team
          </li>
        </Flex>
      </nav>
      <CardData player={player} />
    </div>
  );
};

export default Home;
