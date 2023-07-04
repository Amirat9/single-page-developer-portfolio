import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='relative max-w-screen-2xl min-h-full mx-auto px-4 pt-5 overflow-hidden sm:pt-8 sm:px-8 lg:pt-10 lg:px-24 xl:px-[165px]'>
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
