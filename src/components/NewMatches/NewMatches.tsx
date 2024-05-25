import { GuideSection } from "./components/GuideSection/GuideSection";
import { UpcomingMatches } from "./UpcomingMatches/UpcomingMatches";

export const NewMatches: React.FC = () => {
  return (
    <>
      <div className="newMatches">
        <GuideSection />
        <UpcomingMatches />
      </div>
    </>
  );
};
