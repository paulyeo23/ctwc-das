import { WithPlayers } from "./WithPlayers/WithPlayers";
import { WithoutPlayers } from "./WithoutPlayers/WithoutPlayers";

export const MatchContent: React.FC<{ players: boolean }> = ({ players }) => {
  if (!players) {
    return <WithoutPlayers />;
  }
  return <WithPlayers />;
};
