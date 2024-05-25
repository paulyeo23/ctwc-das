export const SameDayMatches: React.FC = () => {
  return (
    <td className="guide-day border-l-0 border-r-0 text-white text-xs text-center px-1">
      {/* <div
        className="guide-same-day-matches"
        data-event="7517"
        data-parent-timestamp="1716143316120"
        data-start-timestamp="1716111000000"
      >
        <a href="/events/7517/matches" className="guide-link a-reset" title="">
          <div className="guide-day-type">Match day</div>
          <div>
            <span data-time-format="H:mm" data-unix="1716111000000">
              17:30
            </span>
            -
            <span data-time-format="H:mm" data-unix="1716154200000">
              5:30
            </span>
          </div>
        </a>
      </div> */}
      <div className="guide-same-day-matches bg-[#2d6da3] rounded-md">
        <a
          href="/events/7517/matches"
          className="guide-link text-reset text-inherit font-inherit no-underline bg-transparent"
          title=""
        >
          <div className="guide-day-type font-bold mb-[-3px]">Match day</div>
          <div>
            <span data-time-format="H:mm" data-unix="1716052800000">
              1:20
            </span>
            -
            <span data-time-format="H:mm" data-unix="1716071400000">
              6:30
            </span>
          </div>
        </a>
      </div>
    </td>
  );
};
