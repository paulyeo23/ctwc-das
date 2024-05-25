import "./GuideHead.css";
export const GuideHead: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="guide-event-name text-left px-1.5 pb-0.5 whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span className="gtSmartphone-only hidden sm:inline">
            Event guide -
          </span>
          <span>May 19</span>-<span>May 25</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Sun</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Mon</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Tue</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Wed</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Thu</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Fri</span>
        </th>
        <th className="guide-weekday whitespace-nowrap overflow-hidden text-ellipsis opacity-65">
          <span>Sat</span>
        </th>
      </tr>
    </thead>
  );
};
