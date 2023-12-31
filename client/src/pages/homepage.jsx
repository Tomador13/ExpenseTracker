import { useState } from "react";


const HomePage = () => {
    const [money, setMoney] = useState( 0 );
    const [initialName, setInitialName] = useState('You');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [list, setList] = useState([]);

    const handleClick = () => {
        money < price
            ? setInitialName('Not Enough Balance')
            : setMoney(money - price);
        setList([...list, name]);
        setName('');
        setPrice('');
    };

    const goto = () => {
        window.location = '/about';
    };

    return (
        <section className="homepage">
            <div>
                <h1>Expense Tracker for {initialName}</h1>
                <h1 onClick={goto}>Balance: {money}</h1>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
            <ol>
                {list.map((e, index) => (
                    <li key={index}>{e}</li>
                ))}
            </ol>
        </section>
    );
};

export default HomePage;
