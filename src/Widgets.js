import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

     const newsArticle = (heading , subtitle) =>(
         <div className = "widgets__article">
           <div className = "widgets__articleLeft">
               <fiberManualRecordIcon/>


           </div>

          
           <div className = "widgets__articleLeft">
             <h4>{heading}</h4>
             <p>{subtitle}</p>
           </div>

         </div>
     )



    return <div className = 'widgets'>
        <div className = "widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
         </div>
         {newsArticle("Rishi stands tall" , "top news - 999 readeres")}
    </div>
    
}

export default Widgets
