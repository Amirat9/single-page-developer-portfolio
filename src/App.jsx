import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='relative max-w-screen-xl min-h-full mx-auto px-4 pt-5 overflow-hidden sm:pt-8 sm:px-8'>
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <footer className='pt-[60px] px-4 pb-2 bg-darkGrey mx-[-16px] sm:mx-[-32px] lg:mx-[-30px] '>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
