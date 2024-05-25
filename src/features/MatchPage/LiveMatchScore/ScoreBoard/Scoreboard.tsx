import scoreboard from "../../../../public/ScoreBoard.png";
export const ScoreBoard: React.FC = () => {
  return (
    <>
      <td className="items-center">
        <img
          src={scoreboard}
          alt="scoreboard"
          className="h-auto w-auto m-auto "
        />
      </td>
      <td className="items-center">
        <img
          src={scoreboard}
          alt="scoreboard"
          className="h-auto w-auto m-auto "
        />
      </td>
    </>
  );
};
