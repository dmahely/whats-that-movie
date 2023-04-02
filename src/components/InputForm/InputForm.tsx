import React, { useState } from "react"
import { Actor } from '../../apis/fetchActors'
import { fetchActors } from "../../apis/fetchActors"

type InputFormProps = {
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
}

const InputForm: React.FC<InputFormProps> = ({ setActors }) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value
        setInputValue(inputText)

        if (inputText.length > 3) {
            // todo: use debounce
            const actorsResult = await fetchActors(inputText)
            setActors(actorsResult)
        }
    }

    return (<input value={inputValue} onChange={handleOnChange} />)
}

export default InputForm