import './App.css'
import About from './components/about';
import Barnav from './components/barnav';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';

//This is a comment for the page.
/*This is a 
multiple line 
comment 
*/
function App() {
  return (
    <>
   <div>
    This is a new Vite project
   </div>
<div className="wrapped">
<p className="Score">My score is {score}</p>
<h2 className="Tag">This is a h2 tag</h2>
<Header/>
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
