import { useState } from 'react'
import './App.scss'


import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import CustomerServices from "./components/CustomerServices/CustomerServices";
import CustomerServices2 from "./components/CustomerServices2/CustomerServices2";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Articles from "./components/Articles/Articles";
import Cta from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <CustomerServices />
        <CustomerServices2 />
        <Testimonials />
        <FAQ />
        <Articles />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
