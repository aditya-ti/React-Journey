import Navbar from "./components/Navbar";
import './App.css';
import TextForm from "./TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";      
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success");
  }else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
  }
}
  
  return (
    <>  
       <Router>
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
       <Alert alert={alert}/>
       <div className="container my-3">
       <Routes>
          <Route path="/about" element={ <About />}>
           
          </Route>
          
          <Route path="/" element={ <TextForm  showAlert={showAlert}   heading="Enter The text to analyze" mode={mode}/>}>
           
          </Route>
        </Routes>
       {/* <About/> */}
       </div>
       </Router>
    </>
  );
}

export default App;
