import { useState } from "react"
import { fetchActors } from "../../apis/fetchActors"

const InputForm = () => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value
        setInputValue(inputText)

        if (inputText.length > 3) {
            // todo: use debounce
            fetchActors(inputText)
        }
    }

    return (<input value={inputValue} onChange={handleOnChange} />)
}

export default InputForm