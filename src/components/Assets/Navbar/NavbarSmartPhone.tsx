import ctwcDas from "../../../public/ctwc_das.png";
export const NavbarSmartPhone: React.FC = () => {
  return (
    <nav
      id="navBarSmartphone"
      className="fixed top-0 w-full bg-white shadow-md z-50 max-w-[1000px]"
    >
      <ul className="nav-content-smartphone flex list-none m-0 p-0">
        <li className="nav-logo flex items-center">
          <a
            href="/"
            className="small-logo text-2d6da3 no-underline bg-transparent"
          >
            <img
              alt="CTWC DAS"
              src={ctwcDas}
              className="small-logo-img h-12 w-12 aspect-[1/1] align-middle border-none bg-white"
              loading="lazy"
            />
          </a>
        </li>
        <li
          id="navItemgYKJITso"
          className="nav-item flex justify-center flex-grow text-sm h-12 items-center border-l border-gray-300"
          data-nav-item=""
        >
          <a
            href="/"
            className="text-gray-800 justify-between no-underline bg-transparent"
          >
            Home
          </a>
        </li>
        <li
          id="navItemgYKJITso"
          className="nav-item flex justify-center flex-grow text-sm h-12 items-center border-l border-gray-300"
          data-nav-item=""
        >
          <a
            href="/"
            className="text-gray-800 justify-between no-underline bg-transparent"
          >
            Matches
          </a>
        </li>
        <li
          id="navItemgYKJITso"
          className="nav-item flex justify-center flex-grow text-sm h-12 items-center border-l border-gray-300"
          data-nav-item=""
        >
          <a
            href="/"
            className="text-gray-800 justify-between no-underline bg-transparent"
          >
            Results
          </a>
        </li>
        <li
          id="navItemgYKJITso"
          className="nav-item flex justify-center flex-grow text-sm h-12 items-center border-l border-gray-300"
          data-nav-item=""
        >
          <a
            href="/"
            className="text-gray-800 justify-between no-underline bg-transparent"
          >
            Qualifiers
          </a>
        </li>
      </ul>
    </nav>
  );
};
