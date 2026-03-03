// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             .then((response) => response.json())
//             .then((res) => setData(res[currency]))
//             console.log(data);
//     }, [currency]);
//     console.log(data);
//     return data;
// }

// export default useCurrencyInfo;


//2
// import {useEffect, useState} from "react"
// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        // Updated the URL to the latest version of the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Error fetching currency data:", err))
    }, [currency])

    return data
}

export default useCurrencyInfo;