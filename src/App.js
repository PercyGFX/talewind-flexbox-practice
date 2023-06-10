import Header from "./components/header"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs";
import Brands from "./components/brands";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto shadow-sm font-medium bg-gray-50">
     <Header />
        <Hero />
        <AboutUs />
        <Brands />
        <Footer />
    </div>
  );
}

export default App;
