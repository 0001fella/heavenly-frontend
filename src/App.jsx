import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Homepage Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import MusicPlayer from "./components/MusicPlayer";
import Contact from "./components/Contact";

// Pages
import ArtistProfiles from "./components/ArtistProfiles";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Blog from "./components/Blog";
import PricingPlans from "./components/PricingPlans";


// AOS library
import AOS from "aos";
import "aos/dist/aos.css";

// SEO
import { Helmet } from "react-helmet";

// ErrorBoundary for lazy-loaded components
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

// Spinner for lazy loading
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner-border animate-spin border-t-4 border-blue-600 rounded-full w-12 h-12"></div>
  </div>
);

// Homepage Component
const Homepage = () => (
  <>
    <Helmet>
      <title>Home - Heavenly Rhythms Studio</title>
      <meta name="description" content="Welcome to Heavenly Rhythms Studio, your creative hub for all things music." />
      <meta name="keywords" content="music studio, recording studio, music production" />
    </Helmet>
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Testimonials />
    <Booking />
    <MusicPlayer />
    <Contact />
  </>
);

// Static Page Components
const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us - Heavenly Rhythms Studio</title>
      <meta name="description" content="Learn more about Heavenly Rhythms Studio, our mission, and values." />
    </Helmet>
    <div className="pt-20"><About /></div>
  </>
);

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services - Heavenly Rhythms Studio</title>
      <meta name="description" content="Explore the wide range of services offered by Heavenly Rhythms Studio." />
    </Helmet>
    <div className="pt-20"><Services /></div>
  </>
);

const GalleryPage = () => (
  <>
    <Helmet>
      <title>Gallery - Heavenly Rhythms Studio</title>
      <meta name="description" content="View our studio photos, sessions, and artists in action." />
    </Helmet>
    <div className="pt-20"><Gallery /></div>
  </>
);

const TestimonialsPage = () => (
  <>
    <Helmet>
      <title>Testimonials - Heavenly Rhythms Studio</title>
      <meta name="description" content="See what our happy clients have to say." />
    </Helmet>
    <div className="pt-20"><Testimonials /></div>
  </>
);

const BookingPage = () => (
  <>
    <Helmet>
      <title>Book a Session - Heavenly Rhythms Studio</title>
      <meta name="description" content="Schedule your studio session with Heavenly Rhythms." />
    </Helmet>
    <div className="pt-20"><Booking /></div>
  </>
);

const MusicPlayerPage = () => (
  <>
    <Helmet>
      <title>Music Player - Heavenly Rhythms Studio</title>
      <meta name="description" content="Listen to sample tracks from our studio sessions." />
    </Helmet>
    <div className="pt-20"><MusicPlayer /></div>
  </>
);

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us - Heavenly Rhythms Studio</title>
      <meta name="description" content="Get in touch with Heavenly Rhythms Studio for inquiries and bookings." />
    </Helmet>
    <div className="pt-20"><Contact /></div>
  </>
);

// 404 Not Found Page
const NotFound = () => (
  <div className="flex justify-center items-center min-h-screen">
    <h1 className="text-4xl">404 - Page Not Found</h1>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/music" element={<MusicPlayerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/artists" element={<ArtistProfiles />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventName" element={<EventDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<PricingPlans />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
