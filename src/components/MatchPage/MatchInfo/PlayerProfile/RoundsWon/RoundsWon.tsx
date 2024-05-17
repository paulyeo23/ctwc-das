export const RoundsWon: React.FC<{ score?: number; win?: boolean }> = ({
  score,
  win,
}) => {
  const winColor = "text-[#08a500]";
  const lostColor = "text-[#e40a0a]";
  return (
    <>
      <div className={win === true ? winColor : win === false ? lostColor : ""}>
        {score}
      </div>
    </>
  );
};
