import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// import SafeComponent from "./SafeComponent";
import Header from 'home/Header'
// const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'

import "./index.scss";

const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {/* <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense> */}

      {/* Handle Error */}
      {/* <SafeComponent>
        <Header />
      </SafeComponent> */}

      <Header />
      <div className="my-10">
        PDP Page Content
      </div>
      <Footer />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
