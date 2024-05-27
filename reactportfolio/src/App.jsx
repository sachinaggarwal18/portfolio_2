import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Test from './Test';

const App=()=>{
  return <div>
<section id='Homepage' >
  <Navbar/>
  <Hero/>
  </section>
<section id='Services'><Parallax type="services" /></section>
<section>Services</section>
<section id='Portfolio'><Parallax type="portfolio" /></section>
<section>Portfolio1</section>
<section>Hero</section>
<section id='Contact'></section>
<Test/>
  </div>;
};

export default App;
