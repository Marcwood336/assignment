import { useState } from 'react'
import classes from './App.module.css';
import MoodBox from './comps/MoodBox/MoodBox';
import Slider from './comps/Slider/Slider';
import Spinner from './comps/Spinner/Spinner';
import ResponsePhrase from './comps/ResponsePhrase/ResponsePhrase';


const App =()=> {

// App is the parent component where the initial state is defined as well as
// the logic to alter it (functions are passed down to children component).


const [rangeValue, setRangeValue] = useState({
  value:50,
  submited:false,
  oneToFive :'',
  phrase:false,
  });


// the following function is triggered anytime the slider thumb is dragged.
// its goal is to update the state in real-time.

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


//the following function update the converted values (from the slider event.target.value) 
// in a scale from 1 to 5 to then send a POST request
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
         if(!data.data.text){
            setRangeValue(rangeValue=>({...rangeValue,phrase:'An error occured, please refresh the page and try again'}))
          }

          setTimeout( function(){
            // setTimeout simulates a delay in receiving the server's response
             setRangeValue(rangeValue=>({...rangeValue,phrase:data.data.text}))
          },2000)

        })        
        .catch(err=>{console.log(err)})
}
 
 // the following variables serve the purpose of storing different components to be render conditionally  
     
let beforeSubmit = (<div> <h1 className={classes.mainTitle}>How are you doing today?</h1>
                    <MoodBox rangeValue={rangeValue}/>
                    <Slider whenSubmit={whenSubmit} rangeValue={rangeValue} setRange={setRange}/>
                    </div>)

let afterSubmit = (<div>
                  {rangeValue.phrase? 
                  <ResponsePhrase rangeValue={rangeValue.oneToFive} phrase={rangeValue.phrase}/>
                  :<Spinner/>}
                  </div>)



 return (
        <div className={classes.App}>
        {rangeValue.submited? afterSubmit :beforeSubmit}
        </div>)
}

export default App
