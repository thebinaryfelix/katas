// https://www.codewars.com/kata/street-fighter-2-character-selection

const streetFighterSelection = (fighters, position, moves) => {
  const hoveredChar = [];
  const newPos = position;
  const updateHovered = charPos => hoveredChar.push(fighters[charPos[1]][charPos[0]]);
  moves.forEach((move) => {
    switch (move) {
      case 'right':
        if (newPos[0] + 1 < fighters[0].length) {
          newPos[0] += 1;
        } else {
          newPos[0] = 0;
        }
        updateHovered(newPos);
        break;
      case 'left':
        if (newPos[0] - 1 >= 0) {
          newPos[0] -= 1;
        } else {
          newPos[0] = fighters[0].length - 1;
        }
        updateHovered(newPos);
        break;
      case 'up':
        if (newPos[1] - 1 >= 0) {
          newPos[1] -= 1;
        }
        updateHovered(newPos);
        break;
      case 'down':
        if (newPos[1] + 1 < fighters.length) {
          newPos[1] += 1;
        }
        updateHovered(newPos);
        break;
      default:
        break;
    }
  });
  return hoveredChar;
};
