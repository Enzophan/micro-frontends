import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import SafeComponent from "./SafeComponent";
import Header from 'home/Header'
// const Header = React.lazy(() => import('home/Header'))
import Footer from 'home/Footer'
import PDPContent from "./PDPContent";


import "./index.scss";

const App = () => {

  return (
    <Router >
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
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
