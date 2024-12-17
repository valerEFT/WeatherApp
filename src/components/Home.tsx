import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

const Home: React.FC = () => {
  return (
    <section className="home container ">
      <Sidebar />
      <main className="main">
        <Header />
        <Main />
      </main>
    </section>
  );
};

export default Home;
