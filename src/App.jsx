import './App.css'
import About from './components/about';
import Barnav from './components/barnav';
import Contact from './components/contact';
import Home from './components/home';
import Menu from './components/menu';

function App() {
  
let name = "Raven";
let score = 40 + 39;

  return (
    <>
   <div>
    This is a new Vite project for {name}
   </div>
<div className="wrapped">
<p className="">My score is {score}</p>
<h2 className="">This is a h2 tag</h2>
<Barnav/>
<About/>
<Contact/>
<Home/>
<Menu/>

</div>
  
      
      
    </>
  )
}

export default App
