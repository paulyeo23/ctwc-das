import { GuideHead } from "./GuideHead/GuideHead";
import { GuideRow } from "./GuideRow/GuideRow";

export const GuideSection: React.FC = () => {
  return (
    <>
      <div className="guide-section-container">
        <div className="guide-section shadow-sm bg-white rounded-md p-2">
          <div className="guide-scroll w-full overflow-y-auto">
            <table className="guide-table w-full border-collapse table-fixed">
              <GuideHead />
              <tbody>
                <GuideRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
