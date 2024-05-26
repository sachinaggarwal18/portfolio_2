import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App=()=>{
  return <div>
<section id='Homepage' >
  <Navbar/>
  <Hero/>
  </section>
<section id='Services'>Parralax</section>
<section>Services</section>
<section id='Portfolio'>Parralax</section>
<section>Portfolio1</section>
<section>Hero</section>
<section id='Contact'></section>
<Test/>
  </div>;
};

export default App;
