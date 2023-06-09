import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard";
import GameSlidingPuzzle from "../games/sliding-puzzle/GameSlidingPuzzle";
import TicTacToe from "../games/tic-tac-toe/TicTacToe";

export const LINKS = {
  DASHBOARD: {
    name: "dashboard",
    path: "/",
    element: <Dashboard />,
  },
  TICTACTOE: {
    name: "tic-tac-toe",
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
  SLIDINGPUZZLE: {
    name: "sliding-puzzle",
    path: "/sliding-puzzle",
    element: <GameSlidingPuzzle />,
  },
};

export const routers = createBrowserRouter([
  {
    element: <App />,
    children: [LINKS.DASHBOARD, LINKS.TICTACTOE, LINKS.SLIDINGPUZZLE],
  },
]);
