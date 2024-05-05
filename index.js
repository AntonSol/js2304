import { GameGrid } from "./components/GameGrid/game-grid.component.js";
import { ResultPanel } from "./components/ResultPanel/result-panel.component.js";
import {
  Settings,
  Size,
  PointsToWin,
  MaximumMisses,
} from "./components/Settings/settings.component.js";
import { Win } from "./components/Win/win.component.js";
import { addEventListener, start, getGameState, GAME_STATES } from "./data.js";
import { Lose } from "./components/Lose/lose.component.js";
export function rerender() {
  const rootElement = document.getElementById("root");

  rootElement.innerHTML = "";

  const gameState = getGameState();

  switch (gameState) {
    case GAME_STATES.IN_PROGRESS:
      rootElement.append(ResultPanel(), GameGrid());
      break;
    case GAME_STATES.SETTINGS:
      rootElement.append(Settings(), Size(), PointsToWin(), MaximumMisses());
      break;
    case GAME_STATES.WIN:
      rootElement.append(Win());
      break;
    case GAME_STATES.LOSE:
      rootElement.append(Lose());
      break;
    default: {
      throw new Error("Not supported state");
    }
  }
}

rerender();
//start();

addEventListener(rerender);
