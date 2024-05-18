import { MatchTimeAndEvent } from "./MatchTimeAndEvent/MatchTimeAndEvent";
import { PlayerProfile } from "./PlayerProfile/PlayerProfile";

export const MatchInfo: React.FC = () => {
  return (
    <div className="standard-box teamsBox relative box-border p-0 w-full flex flex-row justify-between shadow-team-sm bg-white">
      <PlayerProfile player={1} score={1} win={true} />
      <MatchTimeAndEvent
        matchDate={new Date()}
        matchName={"CTWC DAS"}
        live={false}
        concluded={false}
      />
      <PlayerProfile player={2} score={0} win={false} />
    </div>
  );
};
