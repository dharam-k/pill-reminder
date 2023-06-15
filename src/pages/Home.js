import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import Banner from '../components/main/banner/Banner';

const Home = () => {
  // Assuming isLoggedIn state is managed in the parent component
  const isLoggedIn = false;

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Main>
        <Banner />
        {/* Your page content */}
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
