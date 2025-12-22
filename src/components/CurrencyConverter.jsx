import { useEffect, useState } from "react";

function CurrencyConverter(){
    const [currencys, setCurrencys] = useState([]);
    const [input, setInput] = useState();
    const [base, setBase] = useState('usd');
    const [target, setTarget] = useState('eur');
    
    useEffect(() =>{

        function loadApi(){
            fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'+ base + '.json')
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
    function HandleChangeStart(e){
        setBase(e.target.value);
    }


    
    return(
        <div>
            <h1>Currency Converter</h1>
            <h3>{base.toUpperCase()} to {target.toUpperCase()} converter</h3>
            <input onChange={HandleChangeInput} value={input} type="number"></input>
            <h3>Start Currency</h3>
            <select value={base} onChange={HandleChangeStart}>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
                <option value="eur">EUR</option>
            </select>
            <h3>Target Currency</h3>
            <select>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
            </select>
        </div>
    )
}

export default CurrencyConverter;