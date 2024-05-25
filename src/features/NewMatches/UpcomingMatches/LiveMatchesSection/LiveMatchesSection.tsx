import { MatchCell } from "../../components/MatchCell/MatchCell";

export const LiveMatchesSection: React.FC = () => {
  return (
    <div className="liveMatchesSection mb-4">
      <div className="headline-flex no-shadow flex h-8 items-center m-0 justify-between relative z-30 shadow-none">
        <h2 className="upcoming-headline text-xs font-bold m-0 text-[rgba(53,53,53,.65)]">
          Live Counter-Strike matches
        </h2>
      </div>
      <MatchCell players={true} />
      <MatchCell players={true} />
      <MatchCell players={true} />
      <MatchCell players={false} />
    </div>
  );
};
