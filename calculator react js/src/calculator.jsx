import React from "react";
import './calculator.css';
import { useState } from "react";

let Calculator=()=>{
    let [input,setinput]=useState("");
   
    let clickhandle=(valuee)=>{
           setinput(input+valuee)
    }
    
    let evalval=(v)=>{
        let val=eval(input)
        setinput(val)
        }
    let allclear=()=>{
      setinput("")
      }

      let deletee=()=>{
        setinput(input.toString().slice(0,-1))
        }
    let ashok=()=>{

    }
    
return(<>
 <div className="container"> 
            <div className="calculatorbox">
                <form onChange={ashok()}>
                    <div className="display">
                        <input type="text" name="display" value={input} />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={()=>allclear("")} className="surya" />
                        <input type="button" value="DE"  className="surya" onClick={()=>deletee("")}/>
                        <input type="button" value="." onClick={()=>clickhandle(".")} className="surya"/>
                        <input type="button" value="÷" onClick={()=>clickhandle("/")} className="surya"/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={()=>clickhandle("7")}/>
                        <input type="button" value="8" onClick={()=>clickhandle("8")}/>
                        <input type="button" value="9" onClick={()=>clickhandle("9")}/>
                        <input type="button" value="x" onClick={()=>clickhandle("*")} className="surya"/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={()=>clickhandle("4")}/>
                        <input type="button" value="5" onClick={()=>clickhandle("5")}/>
                        <input type="button" value="6" onClick={()=>clickhandle("6")}/>
                        <input type="button" value="-" onClick={()=>clickhandle("-")} className="surya" />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={()=>clickhandle("1")}/>
                        <input type="button" value="2" onClick={()=>clickhandle("2")}/>
                        <input type="button" value="3" onClick={()=>clickhandle("3")}/>
                        <input type="button" value="+" onClick={()=>clickhandle("+")} className="surya"/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={()=>clickhandle("00")}/>
                        <input type="button" value="0" onClick={()=>clickhandle("0")}/>
                        <input type="button" value="=" onClick={()=>evalval()}/>
                        <input type="button" value="%" onClick={()=>clickhandle("%")} className="surya"/>
                    </div>
                    
                </form>

            </div>
        </div>


</>
)
}
export default Calculator;
