import "./GuideRow.css";
import { NoMatches } from "./NoMatches/NoMatches";
import { SameDayMatches } from "./SameDayMatches/SameDayMatches";

export const GuideRow: React.FC = () => {
  return (
    <tr>
      <td className="guide-event text-ellipsis newMatches guide-section guide-table guide-event p-1 h-6">
        <img
          alt="CCT Global Finals 2024"
          className="event-logo day-only"
          title="CCT Global Finals 2024"
          src="https://img-cdn.hltv.org/eventlogo/QfHLiBKtIobckNYq2hVgim.png?ixlib=java-2.1.0&amp;w=50&amp;s=1cca7a2a8468c0c34ddc4d3b30fbbb84"
        />
        <a href="/events/7438/iem-dallas-2024" className="font-bold text-reset">
          CCT Global Finals
        </a>
      </td>
      <SameDayMatches />
      <SameDayMatches />
      <SameDayMatches />
      <SameDayMatches />
      <SameDayMatches />
      <NoMatches />
      <NoMatches />
    </tr>
  );
};
