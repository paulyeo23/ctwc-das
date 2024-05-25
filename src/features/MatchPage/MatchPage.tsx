import { MatchDetails } from "./MatchDetails/MatchDetails";
import { LiveMatchScore } from "./LiveMatchScore/LiveMatchScore";
import { ComapreStats } from "./ComapreStats/CompareStats";
import { MatchInfo } from "./MatchInfo/MatchInfo";

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
