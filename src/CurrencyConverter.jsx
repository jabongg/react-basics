import { useEffect, useState } from "react"

function CurrencyConverter(currency) {
    const [data, setData] = useState(0)

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    console.log(url)

    // custom hooks
    function useCurrencyInfo() {
        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((res) =>setData(res[currency]))
        }, [currency])

        console.log(data)
        return data
    }

    return (
        <> 
        <h1 className="text-3xl bg-orange-500">Currency Converter</h1>
        </>
    )
}

export default CurrencyConverter