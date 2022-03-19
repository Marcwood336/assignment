
import classes from './SubmitBTN.module.css'

const submitBTN = (props)=>{

    return <button onClick={()=>{props.whenSubmit()}} className={classes.SubmitButton} >Submit</button>
}

export default submitBTN;