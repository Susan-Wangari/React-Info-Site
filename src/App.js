import logo from './logo.svg';
import './App.css';

//creating the header as a separate component
function Header(){
  return (
  <header>
       <nav>
       <img src={logo} className="App-logo" alt="logo" width="150"/>
       </nav>
     </header>
  )
};

//footer component
function Footer(){
  return (
<footer>
     <small>&copy; 2022 Susan Wangari.All rights reserved. </small>
    </footer>
  )
};

function MainComponent (){
  return (
    <div>
      <h1>Reasons for Learning React</h1>
      <ol>
        <li>It is composable- broken down to litte pieces that can make a whole.</li>
        <li>It is fun</li>
        <li>It is used in many apps</li>
      </ol>
    </div>
  )
}
function App() {
  
  return (
    <div>
       {/* creating an instance of the header */}
      <Header />
    
      <MainComponent />
    {/* rendering the footer */}
    <Footer />
    </div>
  ) 
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
