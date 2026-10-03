import { Link } from "react-router-dom";
import Home1 from "../assests/dandiyalogo.png";
import "./home.css";
import Navbar from "./navbar";
import Foot from "./footer";
import Home3 from "../assests/fronpic.jpeg";
import Crousel from "./slider.js";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          style={{ marginTop: "2em", marginBottom: "2em" }}
        >
          <img
            className="object-cover object-center rounded imageee"
            alt="hero"
            src={Home3}
          />
          <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-5 mt-4 flex flex-col  md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">
              Taaza Dandiya 2026
            </h1>
            <p className="mb-4 leading-relaxed text-center">
              Taaza Dandiya 2026 - Celebrate 17 Years of Dance, Music, & Fun |
              Navratri 2026
            </p>
            <div className="flex justify-center">
              <Link to="/get-tickets">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Book Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img src={Home1} alt="home" className="relative  hero-sec imageee" />
      </section>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center"
          style={{ marginTop: "2em", marginBottom: "2em", gap: "30px" }}
        >
          <Crousel />
          <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-5 mt-4 flex flex-col  md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">
              Event Details
            </h1>
            <p className="mb-4 leading-relaxed text-justify">
              Taaza Dandiya 2026 is set to take place from Spetember 18th to 20th
              October 2026 at the Milan Mela Prangan (Behind ITC kolkata). It promises an
              unforgettable experience, with a lineup that includes sensational
              artists, exciting contests with fantastic prizes, and the biggest
              dance floor in East India. Be part of this grand celebration and
              book your tickets now. Join the rhythm, embrace the culture, and
              get ready to dance your heart out at Taaza Dandiya 2026!
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>

      <Foot />
    </div>
  );
}


// import { Link } from "react-router-dom";
// import Home1 from "../assests/dandiyalogo.png";
// import "./home.css";
// import Navbar from "./navbar";
// import Foot from "./footer";
// import Home3 from "../assests/fronpic.jpeg";
// import Crousel from "./slider.js";

// export default function Home() {
//   return (
//     <div className="h-[100vh] flex flex-col min-h-screen overflow-x-hidden">
//       <Navbar />

//       <section className="text-gray-600 body-font">
//         <div
//           className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
//           style={{ marginTop: "2em", marginBottom: "2em" }}
//         >
//           <img
//             className="object-cover object-center rounded imageee"
//             alt="hero"
//             src={Home3}
//           />

//           <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-5 mt-4 flex flex-col md:text-left items-center text-center">
//             <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">
//               Taaza Dandiya 2026
//             </h1>

//             <p className="mb-4 leading-relaxed text-center">
//               Taaza Dandiya 2026 - Celebrate 17 Years of Dance, Music, & Fun |
//               Navratri Concert 2026
//             </p>

//             <div className="flex justify-center">
//               <a
//                 href="https://www.district.in/events/taaza-dandiya-2026-buy-tickets?shortlink=6x2hsvg7&link_params=%7B%22event_id%22%3A%226ab4e4eee0a28553105e9a61%22%2C%22event_slug%22%3A%22taaza-dandiya-2026%22%7D&af_dp=edition%3A%2F%2Fresolve-onelink&source_caller=api_v2&link_type=open_event_details_page&deep_link_value=edition%3A%2F%2Fresolve-onelink%3Flink_type%3Dopen_event_details_page%26link_params%3D%257B%2522event_id%2522%253A%25226ab4e4eee0a28553105e9a61%2522%252C%2522event_slug%2522%253A%2522taaza-dandiya-2026%2522%257D%26utm_source%3DSocialShare%26share_tag%3D5pWPQw%2FBSusFO34YYMqr2oIXnIHz9J47SDEtu2wVH3klYz%2Bp&pid=SocialShare&onelink_id=DSTRKT"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
//                   Book Tickets
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>

//         <img src={Home1} alt="home" className="relative hero-sec imageee" />
//       </section>

//       <section className="text-gray-600 body-font">
//         <div
//           className="container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center"
//           style={{ marginTop: "2em", marginBottom: "2em", gap: "30px" }}
//         >
//           <Crousel />

//           <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-5 mt-4 flex flex-col md:text-left items-center text-center">
//             <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">
//               Event Details
//             </h1>

//             <p className="mb-4 leading-relaxed text-justify">
//               Taaza Dandiya 2026 is set to take place from October 18th to
//               20th October 2026 at the Biswa Bangla Milan Mela Prangan,WBTPO(Behind ITC kolkata).
//               It promises an unforgettable experience, with a lineup that
//               includes sensational artists, exciting contests with fantastic
//               prizes, and the biggest dance floor in East India. Be part of
//               this grand celebration and book your tickets now. Join the
//               rhythm, embrace the culture, and get ready to dance your heart
//               out at Taaza Dandiya 2026!
//             </p>

//             <div className="flex justify-center"></div>
//           </div>
//         </div>
//       </section>

//       <Foot />
//     </div>
//   );
// }