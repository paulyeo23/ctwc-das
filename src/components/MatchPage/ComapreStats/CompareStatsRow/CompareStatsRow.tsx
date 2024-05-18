export const CompareStatsRow: React.FC<{
  player1Text: string;
  player1Bold: boolean;
  statsName: string;
  player2Text: string;
  player2Bold: boolean;
}> = ({ player1Text, player1Bold, statsName, player2Text, player2Bold }) => {
  return (
    <tr className="statRow rating bg-gradient-to-r from-transparent via-transparent to-transparent transition duration-200 ease-linear">
      <td
        className={`lineups-compare-middle-table-stat left-stat best-stat ${
          player1Bold ? "font-bold" : ""
        } text-[#eaf5ff] drop-shadow-[0_0_10px_#80a0c1] opacity-100 w-[20px] h-[23px] p-0 text-center`}
      >
        {player1Text}
      </td>
      <td className="lineups-compare-middle-table-center-stat text-center uppercase opacity-65 p-0 text-[#eaf5ff]">
        {statsName}
      </td>
      <td
        className={`lineups-compare-middle-table-stat right-stat w-5 opacity-65 p-0 text-[#eaf5ff] ${
          player2Bold ? "font-bold" : ""
        } text-center`}
      >
        {player2Text}
      </td>
    </tr>
  );
};
