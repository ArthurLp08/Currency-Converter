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
        <form className="bg-[#13315C] w-[45%] h-[65%] rounded-[64px] border-[#134074] border-2 flex flex-col items-center p-[32px]">
            <h1 className="text-white text-3xl mb-[32px]">Currency Converter</h1>
            <h3 className="text-white text-xl">{base.toUpperCase()} to {target.toUpperCase()} converter</h3>
            <input className="w-[80%] h-[44px] indent-3 rounded-md mb-[16px]" onChange={HandleChangeInput} value={input} type="number"></input>
            <h3 className="text-white text-xl">Start Currency</h3>
            <select className="w-[80%] h-[44px] indent-3 rounded-md mb-[16px]" value={base} onChange={HandleChangeStart}>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
                <option value="eur">EUR</option>
            </select>
            <h3 className="text-white text-xl">Target Currency</h3>
            <select className="w-[80%] h-[44px] indent-3 rounded-md mb-[32px]" value={target} onChange={HandleChangeTarget}>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
            </select>
            <button className="w-[50%] bg-white h-[44px] rounded-md mb-[16px]" onClick={HandleSubmit} type="submit">Convert</button>
            <h3 className="text-white text-xl">Converted currency: {formatter.format(converted)} {target.toUpperCase()}</h3>
        </form>
    )
}

export default CurrencyConverter;