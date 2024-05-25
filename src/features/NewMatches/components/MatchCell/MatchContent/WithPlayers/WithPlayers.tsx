import { MatchEvent } from "../../MatchEvent/MatchEvent";
import { MatchPlayer } from "../MatchPlayer/MatchPlayer";

export const WithPlayers: React.FC = () => {
  return (
    <>
      <div className="matchTeams flex flex-col justify-evenly flex-[1_auto] whitespace-nowrap overflow-hidden text-ellipsis">
        <MatchPlayer />
        <MatchPlayer />
      </div>
      <MatchEvent />
    </>
  );
};
