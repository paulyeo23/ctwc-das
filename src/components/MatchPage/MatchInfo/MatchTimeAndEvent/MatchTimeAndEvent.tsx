export const MatchTimeAndEvent: React.FC<{
  matchDate?: Date;
  matchName?: String;
  live?: boolean;
  concluded?: boolean;
}> = ({ matchDate, matchName, live, concluded }) => {
  return (
    <div className="flex flex-col justify-around items-center text-center max-w-[33%] flex-1">
      <div
        className="font-bold text-9xl max-w-full text-gray-900 text-center"
        data-time-format="HH:mm"
        data-unix="1715436900000"
      >
        22:15
      </div>
      <div
        className="text-xs max-w-full"
        data-time-format="do 'of' MMMM y"
        data-unix="1715436900000"
      >
        11th of May 2024
      </div>
      <div className="event text-sm max-w-full truncate">
        <a
          href="/events/7440/esl-pro-league-season-19"
          title="ESL Pro League Season 19"
          className="no-underline text-blue-700 bg-transparent"
        >
          CTWC 2019
        </a>
      </div>
      <div className="text">&nbsp;</div>
      <div className="countdown font-bold text-lg max-w-full mb-1">LIVE</div>
    </div>
  );
};
