import React ,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative dark:bg:-main-dark-bg" >
          <div className="fixed right-4" style={{zindex: '1000'}}></div>  
        </div> 
       
      </BrowserRouter>
    </div>
    
    
  )

  

}

export default App