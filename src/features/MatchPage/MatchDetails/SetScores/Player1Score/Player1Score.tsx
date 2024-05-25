export const Player1Score: React.FC = () => {
  return (
    <>
      <span className="match-page maps results results-left lost whitespace-nowrap overflow-hidden text-ellipsis flex-shrink-0 flex-grow-0 w-[43%] flex text-red-600">
        <div className="results-teamlogo-container flex-none h-5 w-5 flex items-center justify-center relative top-[3px] mx-[5px] ml-[2px]">
          <img
            alt="UK"
            className="logo max-h-full max-w-full h-auto w-auto border-none"
            title="UK"
            height="20px"
            width="20px"
            src="https://www.hltv.org/img/static/flags/30x20/GB.gif"
          />
        </div>
        <div className="results-teamname-container whitespace-nowrap overflow-hidden text-ellipsis">
          <div className="results-teamname text-ellipsis whitespace-nowrap overflow-hidden font-medium text-gray-700 text-opacity-65">
            BeastinShen
          </div>
          <div className="results-team-score sm:mt-0">800,000</div>
        </div>
      </span>
    </>
  );
};
