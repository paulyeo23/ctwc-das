import "./CompareStats.css";
import { CompareStatsRow } from "./CompareStatsRow/CompareStatsRow";

export const ComapreStats: React.FC = () => {
  return (
    <div className="match-page lineups-compare-container">
      <div className="lineups-compare-middle flex justify-center z-[99] -ml-1 -mr-1 pt-2 pb-3">
        <table className="bg-lineups-compare-container lineups-compare-middle-table table-fixed w-3/5 border-collapse border-spacing-0 ">
          <thead>
            <tr>
              <th
                className="table-header uppercase tracking-wider text-[#d1e3f5] drop-shadow-[0_0_10px_#80a0c1] h-[20px] p-2"
                colSpan={3}
              >
                Highlighted stats
              </th>
            </tr>
          </thead>
          <tbody>
            <CompareStatsRow
              statsName="Pre-29 tetris rate"
              player1Text="85%"
              player1Bold={true}
              player2Text="75%"
              player2Bold={false}
            />
            <CompareStatsRow
              statsName="Average lines"
              player1Text="230"
              player1Bold={true}
              player2Text="200"
              player2Bold={false}
            />
            <CompareStatsRow
              statsName="Avg Transition"
              player1Text="500,000"
              player1Bold={true}
              player2Text="400,000"
              player2Bold={false}
            />
            <CompareStatsRow
              statsName="Kill screen rate"
              player1Text="85%"
              player1Bold={true}
              player2Text="75%"
              player2Bold={false}
            />
            <CompareStatsRow
              statsName="Qualifying score"
              player1Text="1,000,000"
              player1Bold={true}
              player2Text="900,000"
              player2Bold={false}
            />
            <CompareStatsRow
              statsName=""
              player1Text=""
              player1Bold={true}
              player2Text=""
              player2Bold={false}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
