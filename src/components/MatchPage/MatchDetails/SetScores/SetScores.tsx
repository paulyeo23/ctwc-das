import { Player1Score } from "./Player1Score/Player1Score";
import { Player2Score } from "./Player2Score/Player2Score";
import { ScoreStats } from "./ScoreStats/ScoreStats";

export const SetScores: React.FC = () => {
  return (
    <>
      <div className="match-page maps mapholder results played relative mb-2 shadow-sm box-border bg-white flex h-10 p-0.5 pt-0 text-xs">
        <Player1Score />
        <div className="results-center flex-none w-[14%] relative text-center flex justify-center">
          <ScoreStats />
        </div>
        <Player2Score />
      </div>
    </>
  );
};
