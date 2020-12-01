import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
//STYLES & ANIMATIONS
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  const games = useSelector((state) => state.games);
  console.log(games);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
