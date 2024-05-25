import "./LiveMatchesContainer.css";
import { MatchInfo } from "./MatchInfo/MatchInfo";
import { MatchContent } from "./MatchContent/MatchContent";
export const MatchCell: React.FC<{ players: boolean }> = ({ players }) => {
  return (
    <div className="liveMatchesContainer shadow-sm bg-white">
      <div className="liveMatches">
        <div className="liveMatch-container relative bg-[#f6f6f9] border-b border-[#ccc]">
          <div className="liveMatch flex cursor-pointer px-4 h-13">
            <a
              href="/matches/2372265/alliance-vs-b8-cct-season-2-europe-series-3"
              className="match a-reset max-w-[calc(100%-48px)] flex flex-[1_auto] text-inherit font-inherit no-underline bg-transparent"
            >
              <MatchInfo />
              <MatchContent players={players} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
