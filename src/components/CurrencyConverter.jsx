import { useEffect, useState } from "react";

function CurrencyConverter(){
    const [currencys, setCurrencys] = useState([]);
    const [input, setInput] = useState(0);
    const [base, setBase] = useState("usd");
    const [target, setTarget] = useState("eur");
    const [converted, setConverted] = useState(0);
    const formatter = new Intl.NumberFormat('en-US',{
         minimumFractionDigits: 1
    });

    
    function loadApi(){
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'+ base + '.json')
        .then((r) => r.json())
        .then((json) => {
            setCurrencys(json);
            return true;
        })
    }

    useEffect(() =>{
        loadApi()
    }), [];

        
    function HandleChangeInput(e){
        setInput(e.target.value);
    }
    function HandleChangeStart(e){
        setBase(e.target.value);
    }
    function HandleChangeTarget(e){
        setTarget(e.target.value);
    }

    function HandleSubmit(e){
        e.preventDefault();
        setConverted(input * currencys[base][target]);
    }

    return(
        <form>
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
            <select value={target} onChange={HandleChangeTarget}>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
            </select>
            <button onClick={HandleSubmit} type="submit">Convert</button>
            <h3>Converted currency: {formatter.format(converted)} {target.toUpperCase()}</h3>
        </form>
    )
}

export default CurrencyConverter;