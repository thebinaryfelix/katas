// https://www.codewars.com/kata/ranking-nba-teams

const nbaCup = (resultSheet, toFind) => {
  const games = resultSheet.split(',');
  const resultsByGame = [];

  const parseGame = (game) => {
    let score = {};
    let gameSplited = game.split(' ');
    let team = '';
    gameSplited.forEach((string) => {
      if (isNaN(string)) {
        team += `${string} `;
      } else {
        score[team.trim()] = parseFloat(string);
        team = '';
      }
    });
    return score;
  };

  const getTeamResults = (results, teamName) => {
    return results.filter(result => result[teamName]).map((res) => {
      const result = [];
      // Transform the result object in an array
      Object.keys(res).forEach((key) => {
        result.push(key);
        result.push(res[key]);
      });
      // Put the wanted team at the beginning of the array
      if (!Number.isInteger(result[1]) || !Number.isInteger(result[3])) return result;
      if (result[0] !== teamName) {
        const endTeam = result.splice(0, 2);
        endTeam.forEach(res => result.push(res));
      }
      return result;
    });
  };

  games.forEach(game => {
    resultsByGame.push(parseGame(game));
  });

  let teamResults = getTeamResults(resultsByGame, toFind);
  let teamData = {
    w: 0,
    d: 0,
    l: 0,
    scored: 0,
    conceded: 0,
    points: 0
  };
  if (!toFind) return '';
  if (teamResults.length === 0) return `${toFind}:This team didn't play!`;
  for (let i = 0; i < teamResults.length; i += 1) {
    const result = teamResults[i];
    if (!Number.isInteger(result[1]) || !Number.isInteger(result[3]))
      return `Error(float number):${result.join(' ')}`;
    if (result[1] > result[3]) teamData.w += 1;
    else if (result[1] === result[3]) teamData.d += 1;
    else teamData.l += 1;
    teamData.scored += result[1];
    teamData.conceded += result[3];
  }
  teamData.points = teamData.w * 3 + teamData.d;
  return `${toFind}:W=${teamData.w};D=${teamData.d};L=${teamData.l};Scored=${teamData.scored};Conceded=${teamData.conceded};Points=${teamData.points}`;
};
