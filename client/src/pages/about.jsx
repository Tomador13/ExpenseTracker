import { useState } from "react"
const About = () => {
    const [ balance , setBalance ] = useState(0)

    const handleClick = () => {

    }
    
    return <>
        <section>
            <h1>About Me</h1>
            <h2>Balance: { balance } </h2>
            <input type="text" 
                   value = {balance} 
                   onChange = { (e) => {setBalance( e.target.value )}} 
            />
            <button onClick = { handleClick }>Enter Money</button>
        </section>
    </>
}
export default  About