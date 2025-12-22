import { useEffect, useState } from "react";

function CurrencyConverter(){
    const [currencys, setCurrencys] = useState([]);
    const [input, setInput] = useState();
    const [base, setBase] = useState('USD');
    const [target, setTarget] = useState('EUR');
    
    useEffect(() =>{

        function loadApi(){
            fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
            .then((r) => r.json())
            .then((json) => {
                setCurrencys(json);
            })
        }

        loadApi()

        
    }), [];
    
    function HandleChangeInput(e){
        setInput(e.target.value);
    }

    
    return(
        <div>
            <h1>Currency Converter</h1>
            <input onChange={HandleChangeInput} value={input} type="number"></input>
        </div>
    )
}

export default CurrencyConverter;