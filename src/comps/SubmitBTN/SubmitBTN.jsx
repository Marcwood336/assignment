import { process_params } from 'express/lib/router';
import classes from './SubmitBTN.module.css'

const submitBTN = (props)=>{

    return <button onClick={()=>{props.whenSubmit()}} className={classes.SubmitButton} >Submit</button>

}



export default submitBTN;