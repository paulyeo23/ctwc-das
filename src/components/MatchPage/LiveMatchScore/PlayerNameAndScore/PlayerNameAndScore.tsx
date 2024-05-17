import { formatScore } from "../../../../lib/scoreFunctions";

export const PlayerNamesAndScores: React.FC = () => {
  const score = { player1: 100000, player2: 200000 };
  const scoreTextColor = {
    leading: "text-red-500",
    trailing: "text-green-500",
    draw: "",
  };
  const getColor = (score1: number, score2: number) => {
    return score1 > score2
      ? scoreTextColor.leading
      : score1 < score2
      ? scoreTextColor.trailing
      : scoreTextColor.draw;
  };
  const scoreColor = {
    player1: getColor(score.player1, score.player2),
    player2: getColor(score.player2, score.player1),
  };
  return (
    <>
      <th>
        <div>
          <span>BeastinShen</span>
        </div>
        <div>
          <span className={scoreColor.player1}>
            {formatScore(score.player1)}
          </span>
        </div>
      </th>
      <th>
        <div>
          <span>BeastinShen</span>
        </div>
        <div>
          <span className={scoreColor.player2}>
            {formatScore(score.player2)}
          </span>
        </div>
      </th>
    </>
  );
};
