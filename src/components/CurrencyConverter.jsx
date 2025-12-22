import { useEffect, useState } from "react";

function CurrencyConverter(){
    const [currencys, setCurrencys] = useState([]);
    
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
    

    
    return(
        <div>

        </div>
    )
}

export default CurrencyConverter;