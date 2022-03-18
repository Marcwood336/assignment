import { useState } from 'react'
import classes from './App.module.css';
import MoodBox from './comps/MoodBox/MoodBox';
import Slider from './comps/Slider/Slider';


const App =()=> {






const [rangeValue, setRangeValue] = useState({
  value:50,
  submited:false,
  phrases:['','mood1','mood2','mood3','mood4','mood5'],
  oneToFive :''
  });


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
          console.log(data);
        });
}






let beforeSubmit = (<div> <h1 className={classes.mainTitle}>How are you doing today?</h1>
  <MoodBox rangeValue={rangeValue}/>
  <Slider whenSubmit={whenSubmit} rangeValue={rangeValue} setRange={setRange}/></div>)

let afterSubmit = (<div>
                  <h1 className={classes.mainTitle}>
                    {rangeValue.phrases[rangeValue.oneToFive]}
                  </h1>
                  </div>)







 function setRange(event){

   console.log();

  let val =event.target.value;


   setRangeValue(rangeValue => ({...rangeValue,value:val}));


  }


  return (
    <div className={classes.App}>

 {rangeValue.submited? afterSubmit :beforeSubmit}


  
    </div>
  )
}

export default App
