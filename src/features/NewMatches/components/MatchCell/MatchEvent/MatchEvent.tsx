import "./MatchEvent.css";
export const MatchEvent: React.FC = () => {
  return (
    <div className="matchEvent flex items-center text-[10px] text-[rgba(53,53,53,.45)] md:flex-[0_0_40px] md:justify-center">
      <div className="matchEventLogoContainer flex h-6 w-6 flex-[0_0_25px] md:mr-0">
        <img
          alt="CCT Season 2 Europe Series 3"
          className="matchEventLogo max-w-full max-h-full border-none"
          title="CCT Season 2 Europe Series 3"
          src="https://img-cdn.hltv.org/eventlogo/YlcimlArByi9AtfHh35vaA.png?ixlib=java-2.1.0&amp;w=50&amp;s=2557cbe4dbcf35791c51959ae93c43e9"
        />
      </div>
      <div className="matchEventName gtSmartphone-only">
        CCT Season 2 Europe Series 3
      </div>
    </div>
  );
};
