import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import MainLayout from "./MainLayout";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     {/* <Header app={{ name: "Home" }} /> */}
//     <Header />
//     <div className="my-10">
//       <HomeContent />
//     </div>
//     <Footer />
//   </div>
// );
ReactDOM.render(<MainLayout />, document.getElementById("app"));
