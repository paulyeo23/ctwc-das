import heartGrey from "../../../../public/heart_grey.png";
import heartRed from "../../../../public/heart_red.png";
export const BestOfScore: React.FC = () => {
  return (
    <>
      <td className="py-0.5">
        <div className="flex justify-center">
          <img src={heartRed} alt="redHeart" className="px-0.5" />
          <img src={heartGrey} alt="greyHeart" className="px-0.5" />
        </div>
      </td>
      <td className="py-1">
        <div className="flex justify-center">
          <img src={heartGrey} alt="greyHeart" className="px-0.5" />
          <img src={heartGrey} alt="greyHeart" className="px-0.5" />
        </div>
      </td>
    </>
  );
};
