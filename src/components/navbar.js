// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom";
// import LogoImg from "../assests/logo.png";
// import "./navbar.css";

// export default function Navbar() {
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <img src={LogoImg} alt="logo" style={{ height: "2em" }} />
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <Link className="mr-5 hover:text-gray-900" to="/">
//             Home
//           </Link>
//           <Link className="mr-5 hover:text-gray-900" to="/about">
//             About
//           </Link>
//           <Link className="mr-5 hover:text-gray-900" to="/terms">
//             Terms
//           </Link>
//           <Link
//             to="https://taazatv.com/contact.php"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mr-5 hover:text-gray-900"
//           >
//             Contact Us
//           </Link>
//         </nav>
//         <Link to="/get-tickets">
//           <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 bg-pink-500 text-white">
//             Book Tickets
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// }
// export function Logo() {
//   return (
//     <img src={LogoImg} alt="logo" className="h-14 object-contain tazza-logo" />
//   );
// }


/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import LogoImg from "../assests/logo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={LogoImg} alt="logo" style={{ height: "2em" }} />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>

          <Link className="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>

          <Link className="mr-5 hover:text-gray-900" to="/terms">
            Terms
          </Link>

          <Link
            to="https://taazatv.com/contact.php"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </nav>

        <a
          href="https://www.district.in/events/taaza-dandiya-2026-buy-tickets?shortlink=6x2hsvg7&link_params=%7B%22event_id%22%3A%226ab4e4eee0a28553105e9a61%22%2C%22event_slug%22%3A%22taaza-dandiya-2026%22%7D&af_dp=edition%3A%2F%2Fresolve-onelink&source_caller=api_v2&link_type=open_event_details_page&deep_link_value=edition%3A%2F%2Fresolve-onelink%3Flink_type%3Dopen_event_details_page%26link_params%3D%257B%2522event_id%2522%253A%25226ab4e4eee0a28553105e9a61%2522%252C%2522event_slug%2522%253A%2522taaza-dandiya-2026%2522%257D%26utm_source%3DSocialShare%26share_tag%3D5pWPQw%2FBSusFO34YYMqr2oIXnIHz9J47SDEtu2wVH3klYz%2Bp&pid=SocialShare&onelink_id=DSTRKT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 bg-pink-500 text-white">
            Book Tickets
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <img
      src={LogoImg}
      alt="logo"
      className="h-14 object-contain tazza-logo"
    />
  );
}