import "./UpcomingMatches.css";
import { LiveMatchesSection } from "./LiveMatchesSection/LiveMatchesSection";
export const UpcomingMatches: React.FC = () => {
  return (
    <div className="standardPageGrid //grid gap-4 md:grid-cols-[minmax(0,1fr)_300px] md:grid-rows-1 cols0101:md:grid-areas-[mainContent_mainContent]">
      <div className="mainContent">
        <LiveMatchesSection />
      </div>
    </div>
  );
};
