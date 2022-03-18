import classes from './Slider.module.css';
import SubmitBTN from '../SubmitBTN/SubmitBTN';


const Slider = (props)=>{




    return(<div className={classes.SliderContainer} >
      <input className={classes.slider} name='slider' onChange={props.setRange}  type='range' />
        <SubmitBTN whenSubmit={props.whenSubmit} />
    </div>)
}



export default Slider;