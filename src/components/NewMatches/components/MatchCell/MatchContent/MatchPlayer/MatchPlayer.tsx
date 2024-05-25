import "./MatchPlayer.css";
export const MatchPlayer: React.FC = () => {
  return (
    <div className="matchPlayer flex items-center">
      <div className="matchPlayerLogoContainer flex h-4 w-4 flex-[0_0_16px] mr-1">
        <img
          alt="Alliance"
          className="matchPlayerLogo max-w-full max-h-full border-none"
          title="Alliance"
          src="https://img-cdn.hltv.org/teamlogo/xZ2lqV9fkxh2snjn0tL9jp.png?ixlib=java-2.1.0&amp;w=50&amp;s=8c510b1bb799d9ddf5b948854e3bad8e"
        />
      </div>
      <div className="matchPlayerName text-ellipsis w-[60%] whitespace-nowrap overflow-hidden">
        Alliance
      </div>
      <div className="matchPlayerScore text-right flex-[0_0_40px] w-10">
        <span className="currentMapScore font-bold text-lg md:text-base">
          4
        </span>
        <span className="mapScore ml-0.5 opacity-65 text-[10px]">
          (
          <span
            data-livescore-maps-won-for=""
            data-livescore-team="12474"
            className="trailing"
          >
            0
          </span>
          )
        </span>
      </div>
    </div>
  );
};
