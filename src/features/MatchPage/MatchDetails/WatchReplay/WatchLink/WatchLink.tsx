export const WatchLink: React.FC = () => {
  return (
    <>
      <div className="stream-box mb-2.5 p-1.5 flex flex-row justify-start cursor-pointer shadow-sm bg-white">
        <span className="flagAlign flex flex-row items-center">
          <img
            alt="United Kingdom"
            src="https://www.hltv.org/img/static/flags/30x20/GB.gif"
            className="stream-flag flag h-3 w-4 box-border border border-black bg-black bg-opacity-5 mr-1.25"
            title="United Kingdom"
          />
          <span className="spoiler ms-1">CTWC</span>
        </span>
      </div>
    </>
  );
};
