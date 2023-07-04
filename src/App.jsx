import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main className='container mx-auto lg:relative'>
        <Navbar />
        <Hero />
        <Experiences />
        <Projects />
      </main>
      <footer className='bg-darkGrey'>
        <Footer />
      </footer>
    </>
  );
};

export default App;
