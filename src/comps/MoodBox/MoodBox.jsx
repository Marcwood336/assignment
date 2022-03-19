import classes from './MoodBox.module.css';
import uno from '../../assets/first.png';
import due from '../../assets/second.png'
import tre from '../../assets/third.png'
import quattro from '../../assets/fourth.png'
import cinque from '../../assets/fifth.png'


const MoodBox = (props)=>{
  
let image = tre
let imageClass = classes.image3

if(props.rangeValue.value <20){
    image =uno
    imageClass = classes.image1}


if(props.rangeValue.value >20 && props.rangeValue.value<40){
    image =due
     imageClass = classes.image2
     }

if(props.rangeValue.value >40 && props.rangeValue.value<60){
    image =tre
     imageClass = classes.image3
     }

if(props.rangeValue.value >60 && props.rangeValue.value<80){
    image =quattro
     imageClass = classes.image4
     }

if(props.rangeValue.value >80 && props.rangeValue.value<=100){
    image =cinque
     imageClass = classes.image5
     }

return(<div className={classes.MoodBox}>
 
        <div className={classes.imageContainer}>
            <img src={image} className={imageClass} />
        </div>

        <div className={classes.MoodBoxModal}/>
        </div>)
}


export default MoodBox;