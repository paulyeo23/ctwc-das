import "./CompareStats.css";
import { CompareStatsRow } from "./CompareStatsRow/CompareStatsRow";

export const ComapreStats: React.FC = () => {
  return (
    <div className="match-page lineups-compare-container">
      <div className="lineups-compare-middle flex justify-center z-[99] -ml-1 -mr-1 pt-2 pb-3">
        <table className="bg-lineups-compare-container lineups-compare-middle-table table-fixed w-1/2 border-collapse border-spacing-0 m-10 p-4">
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
            <CompareStatsRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};
