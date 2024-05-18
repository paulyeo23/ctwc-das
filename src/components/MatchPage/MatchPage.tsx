import { MatchInfo } from "./MatchInfo/MatchInfo";
import { MatchDetails } from "./MatchDetails/MatchDetails";
import { MatchBoxDropdown } from "./MatchDropdownBox/MatchBoxDropdown";
import { LiveMatchScore } from "./LiveMatchScore/LiveMatchScore";
import { ComapreStats } from "./ComapreStats/CompareStats";

export const MatchPage: React.FC = () => {
  return (
    <div id="Match-Page">
      {/* <MatchBoxDropdown /> */}
      <MatchInfo />
      <MatchDetails />
      <LiveMatchScore />
      <ComapreStats />
    </div>
  );
};
