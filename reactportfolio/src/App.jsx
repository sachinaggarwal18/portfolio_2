import './app.scss'
import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App=()=>{
  return <div>
<section id='Homepage' ><Navbar/></section>
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
