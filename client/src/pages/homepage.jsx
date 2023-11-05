import { useState } from "react";
const HomePage = () => {
    const [ money , setMoney ] = useState( 5000 )
    const [ initialName , setInitialName ] = useState( 'Expense Tracker for You' )
    const [ name , setName ] = useState('')
    const [ price , setPrice ] = useState()

    const handleClick = () => {
        if(money < price){
            setInitialName ( 'Not Enough Balance' )
        }else{
            setMoney ( money - price )
        }
    }

    return <>
        <section className="homepage">
            <div>
                <h1> { initialName } </h1>
                <h1>Balance: { money }</h1>
                    <input type="text" 
                        placeholder = "Item Name"
                        onChange = { (e) => { setName( e.target.value ) } }
                    />
                    <input type="text" 
                        placeholder="Price"
                        onChange = { (e) => { setPrice ( e.target.value ) } }
                    />
                <button onClick={ handleClick }>Submit</button>
            </div>
        </section>
    </>

}

export default HomePage