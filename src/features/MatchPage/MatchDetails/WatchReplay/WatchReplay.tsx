import { WatchLink } from "./WatchLink/WatchLink";

export const WatchReplay: React.FC = () => {
  return (
    <>
      <span className="headline text-gray-900 text-base font-bold">
        Rewatch
      </span>
      <div className="streams" style={{ width: "calc(100% - 1px)" }}>
        <a className="stream-box" href="/">
          <div className="flexbox left-right-padding">NestrisChamps replay</div>
        </a>
        <span className="spoiler">
          <WatchLink />
          <WatchLink />
          <WatchLink />
        </span>
      </div>
      <div
        style={{ height: "1px", width: "1px" }}
        data-lnhnyipxec="MatchPageBelowStreams"
      ></div>
    </>
  );
};
