import beastinShen from "../../../../public/players/BeastinShen-removebg-preview.png";
import US from "../../../../public/country-flag-icons/3x2/US.svg";
import { RoundsWon } from "./RoundsWon/RoundsWon";
export const PlayerProfile: React.FC<{
  player: 1 | 2;
  score?: number;
  win?: boolean;
}> = ({ player, score, win }) => {
  const playerClassName = {
    1: "absolute w-full h-full flex flex-col justify-center items-center left-0 right-[-1px] mx-auto top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-transparent to-white",
    2: "absolute w-full h-full flex flex-col justify-center items-center left-0 right-0 mx-auto top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-transparent via-transparent to-white",
  };

  return (
    <div className="team relative flex-1 flex flex-col justify-center items-center text-center font-bold text-lg overflow-hidden h-48 md:h-64">
      <div className="absolute h-full">
        <img
          alt="Mongolia"
          src="https://www.hltv.org/img/static/flags/300x200/MN.png"
          title="Mongolia"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className={playerClassName[player]}>
        <a
          href="/team/6665/astralis"
          className="no-underline text-blue-700 bg-transparent"
        >
          <img
            src={beastinShen}
            alt="BeastinShen"
            className="w-auto h-15 md:h-24"
          />
          <div className="teamName">BeastinShen</div>
        </a>
        <RoundsWon score={score} win={win} />
      </div>
    </div>
  );
};
