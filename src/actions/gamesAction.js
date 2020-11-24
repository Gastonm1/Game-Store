import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  //Fetch
  const popularGameData = await axios.get(popularGamesURL());
  const newGameData = await axios.get(newGamesURL());
  const upcomingGameData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameData.data.results,
      upcoming: upcomingGameData.data.results,
      newGames: newGameData.data.results,
    },
  });
};

export default loadGames;
