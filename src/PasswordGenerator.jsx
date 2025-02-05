import { useCallback, useEffect, useState, useRef } from "react"

function PasswordGenerator() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    // useRef hook
    const passwordRef = useRef(null)


    // useCallback hook
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+{}|-=[]`\\"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)
    },  [length, numberAllowed, charAllowed])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, password.length)
        window.navigator.clipboard.writeText(password)
    }, [password])


    // useEffect hook : thoda sa bhi change ho to phir se call kar do 
    useEffect(() => {
        passwordGenerator()
    }, [length, charAllowed, numberAllowed, passwordGenerator])


    return (
        <>

            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-500 bg-yellow-500">
            <h1 className="text-4xl text-center"> Hello Password Generator!</h1> 
            <br />

            <br />
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                    type="text" 
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />

                <button onClick={copyPasswordToClipboard} className="bg-blue-700 text-white px-3 py-0,5 shrink-0">copy</button>
            </div>
            <br />
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input 
                        type="range"
                        min={8}
                        max={25}
                        value={length}
                        className="curson-pointer"
                        onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length : {length} </label>
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={() => {
                        setNumberAllowed((prev) => !prev)
                    }}
                />
                <label>Numbers : {length} </label>
            </div>

            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="charInput"
                    onChange={() => {
                        setCharAllowed((prev) => !prev)
                    }}
                />
                <label>Characters : {length} </label>
            </div>
            </div>
        </>
    )
}

export default PasswordGenerator