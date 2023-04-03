import { Input, Flex } from "@chakra-ui/react"
import React from "react"
import { Actor } from '../../apis/fetchActors'
import { fetchActors } from "../../apis/fetchActors"

type InputFormProps = {
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const InputForm: React.FC<InputFormProps> = ({ setActors, inputValue, setInputValue }) => {
    const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value
        setInputValue(inputText)

        if (inputText.length > 3) {
            // todo: use debounce
            const actorsResult = await fetchActors(inputText)
            setActors(actorsResult)
        }
    }

    return (
        <Flex display-name="input-flex">
            <Input placeholder="Enter an actor's name" value={inputValue} onChange={handleOnChange} />
        </Flex>)
}

export default InputForm