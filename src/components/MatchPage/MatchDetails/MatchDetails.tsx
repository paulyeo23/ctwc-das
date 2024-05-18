import { SetScores } from "./SetScores/SetScores";
import { WatchReplay } from "./WatchReplay/WatchReplay";

export const MatchDetails: React.FC = () => {
  return (
    <div className="match-page maps g-grid flex -ml-4 flex-row sm:flex-wrap sm:mt-2 sm:-mb-2 -mb-4 pb-2 pt-2">
      <div className="col-6 w-full pl-4 box-border min-w-0 sm:pb-2 sm:w-7/12">
        <div className="standard-box veto-box mb-2.5 bg-white p-2.5">
          <div className="preformatted-text whitespace-pre-line break-words">
            Best of 3 (Online)
          </div>
        </div>
        <div className="match-page flexbox-column flex flex-col">
          <SetScores />
          <SetScores />
          <SetScores />
        </div>
      </div>
      <div className="g-grid col-6 col-5-small flex flex-wrap w-full pl-4 box-border min-w-0 overflow-hidden sm:w-5/12 sm:pb-2 last:pb-2">
        <WatchReplay />
      </div>
    </div>
  );
};
