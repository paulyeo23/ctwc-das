import { formatScore } from "../../../../lib/scoreFunctions";
import nextBox from "../../../../public/next_box.png";

export const PlayerNamesAndScores: React.FC = () => {
  const score = { player1: 100000, player2: 200000 };
  const scoreTextColor = {
    leading: "text-green-500",
    trailing: "text-red-500",
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
          <div>
            <span>BeastinShen</span>
          </div>
          <div>
            <span className={scoreColor.player1}>
              {formatScore(score.player1)}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={nextBox} alt="Player 1" className="w-1/3" />
        </div>
      </th>
      <th>
        <div>
          <div>
            <span>BeastinShen</span>
          </div>
          <div>
            <span className={scoreColor.player2}>
              {formatScore(score.player2)}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={nextBox} alt="Player 2" className="w-1/3" />
        </div>
      </th>
    </>
  );
};
