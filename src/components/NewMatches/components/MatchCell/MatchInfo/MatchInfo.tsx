import { BestOf } from "./BestOf/BestOf";
import { MatchLive } from "./MatchLive/MatchLive";

export const MatchInfo: React.FC = () => {
  return (
    <div className="matchInfo flex-[0_0_33px] mr-4 justify-center flex flex-col">
      <MatchLive />
      <div className="matchRating matchLive mt-0.5 mb-0.5 text-[6px]">
        {/* <i className="fa fa-star" />
        <i className="fa fa-star faded" />
        <i className="fa fa-star faded" />
        <i className="fa fa-star faded" />
        <i className="fa fa-star faded" /> */}
      </div>
      <BestOf />
    </div>
  );
};
