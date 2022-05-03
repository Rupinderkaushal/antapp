import React ,{useState}from 'react';
import "./Spinnr.css";
import Ant from "../../Assests/small-ants.jpg";
import AntOne from "../../Assests/we.jpg";
import AntTwo from '../../Assests/fd.png';
import AntThree from "../../Assests/iuiu.jpg";
import AntFour from "../../Assests/ws.jpg";
// class Spinnr  extends React.Component{
    const Spinnr =()=>{
    const [name,setName]=useState("circle")
    // state={
    //     name:"circle"
    // }
  const  startRotation=()=>{
        setName("circle start-rotate");
        setTimeout(()=>{
    setName("circle start-rotate stop-rotate")
        },Math.floor(Math.random()* 10000)+1);
    }
    
    // render(){
        return(
            <>
            <div>
                <div className="arrow"></div>
                <ul className={name}>
                    <li>
                        <div style={{backgroundImage:`url(${AntOne})`}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li>
                    <li>
                        <div style={{backgroundImage:`url(${Ant})`}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li>
                    <li>
                        <div style={{backgroundImage:`url(${AntTwo})`}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li>
                    <li>
                        <div style={{backgroundImage:`url(${AntThree})`,backgroundSize:" 100% 100%",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntFour})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntOne})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${Ant})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntTwo})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntThree})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntFour})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li> <li>
                        <div style={{backgroundImage:`url(${AntOne})`,backgroundSize:"cover",backgroundPosition:"top"}} className="text" contentEditable="true" spellCheck="false"></div>
                    </li>
                    <li>
                        <div style={{backgroundImage:`url(${AntThree})`}} className="text" contentEditable="true" spellCheck="false">12</div>
                    </li>
                </ul>
                <button className="spin-button" onClick={startRotation}>SPIN</button>
            </div>
            </> 
        )
    // }

}

export default Spinnr;