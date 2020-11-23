// BASE URL
const base_url = "https://api.rawg.io/api/";

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentMonth}/${currentDay}/${currentYear}`
console.log(currentDate);

//Popular Games
const popular_games = "https://api.rawg.io/api/games?dates=";
