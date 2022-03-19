import classes from './ResponsePhrase.module.css'

const ResponsePhrase = (props)=>{

let backgroundClass = ''

    switch(props.rangeValue){

        case 1:
            {backgroundClass='#ff6961'}
            break;

            case 2:
            {backgroundClass='#fddd5c'}
            break;

            case 3:
            {backgroundClass='#a5a5a5'}
            break;

             case 4:
            {backgroundClass='#77dd76'}
            break;

               case 5:
            {backgroundClass='#80bc2a'}
            break;

            default :
              {backgroundClass='#80bc2a'}
              break



  }

console.log(props);
    return(<div className={classes.ResponsePhrase} style={{backgroundColor:backgroundClass}}>
        <h1 className={classes.responseTitle} >{props.phrase}</h1>

        </div>)
}


export default ResponsePhrase;

// #a5a5a5
// #fddd5c
// #a5a5a5
// #77dd76
// #80bc2a
