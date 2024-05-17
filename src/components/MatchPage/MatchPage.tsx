import { MatchInfo } from "./MatchInfo/MatchInfo";
import { MatchDetails } from "./MatchDetails/MatchDetails";
import { MatchBoxDropdown } from "./MatchDropdownBox/MatchBoxDropdown";
import { LiveMatchScore } from "./LiveMatchScore/LiveMatchScore";
import { ComapreStats } from "./ComapreStats/CompareStats";

export const MatchPage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-slate-200 text-gray-800 font-sans overflow-y-scroll h-screen text-sm leading-relaxed"
      id="Match-Page"
    >
      {/* <MatchBoxDropdown /> */}
      <MatchInfo />
      <MatchDetails />
      <LiveMatchScore />
      <ComapreStats />
    </div>
  );
};
