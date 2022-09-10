import './App.css'
import img from './arthur3.jpg'
function Arthur() {
    const sight = "poor"
    const age = 12
    
    return (
        <div className='Arthur'>
             <img src={img} className='arthur' />
       <h4>My sight is {sight}</h4>
       <p>I am {age} years old</p>
        </div>
    )
}
export default Arthur