import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./compnents/Header";
import Hero from "./compnents/Hero";
import StackCards from "./compnents/StackCards";
import IntroCards from "./compnents/IntroCards";
import Stats from "./compnents/Stats";
import FeaturedJournals from "./compnents/FeaturedJournals";
import NewReleases from "./compnents/NewReleases";
import Specialties from "./compnents/Specialties";
import Testimonials from "./compnents/Testimonials";
import Mentors from "./compnents/Mentors";
import Newsletter from "./compnents/Newsletter";
import Footer from "./compnents/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StackCards />
      <IntroCards />
      <Stats />
      <FeaturedJournals />
      <NewReleases />
      <Specialties />
      <Testimonials />
      <Mentors />
      <Newsletter />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
