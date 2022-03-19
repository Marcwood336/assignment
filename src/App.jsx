import { useState } from 'react'
import classes from './App.module.css';
import MoodBox from './comps/MoodBox/MoodBox';
import Slider from './comps/Slider/Slider';
import Spinner from './comps/Spinner/Spinner';
import ResponsePhrase from './comps/ResponsePhrase/ResponsePhrase';


const App =()=> {






const [rangeValue, setRangeValue] = useState({
  value:50,
  submited:false,
  oneToFive :'',
  phrase:false,


  });




  
 function setRange(event){



  let val =event.target.value;


   setRangeValue(rangeValue => ({...rangeValue,value:val}));


  }


  const response = ()=>{

 let val= rangeValue.value



if(val <20){return 1}
if(val >20 && val<40){return 2}
if(val >40 && val<60){return 3}
if(val >60 && val<80){return 4}
if(val >80 && val<101){return 5}
}


function whenSubmit(){






const mood = response()


setRangeValue(rangeValue => ({...rangeValue,submited:true}));
setRangeValue(rangeValue => ({...rangeValue,oneToFive:mood}));


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: mood })
    };
    fetch('https://automation.uselab.com/api/fe-test/mood', requestOptions)
        .then(response => response.json())
        .then(data => {
          return data

        })
        .then(data=>{


          setTimeout( function(){
             setRangeValue(rangeValue=>({...rangeValue,phrase:data.data.text}))
          },2000)

        })
        //  setTimeout( function(){
        //      setRangeValue(rangeValue=>({...rangeValue,phrase:'text'}))
        //   },2000)
}

     







let beforeSubmit = (<div> <h1 className={classes.mainTitle}>How are you doing today?</h1>
  <MoodBox rangeValue={rangeValue}/>
  <Slider whenSubmit={whenSubmit} rangeValue={rangeValue} setRange={setRange}/></div>)

let afterSubmit = (<div>
                  <h1 className={classes.mainTitle}>
                    
                  </h1>
                  {rangeValue.phrase? <ResponsePhrase rangeValue={rangeValue.oneToFive} phrase={rangeValue.phrase}/> :<Spinner/>}
                  </div>)








  return (
    <div className={classes.App}>

 {rangeValue.submited? afterSubmit :beforeSubmit}


  
    </div>
  )
}

export default App
