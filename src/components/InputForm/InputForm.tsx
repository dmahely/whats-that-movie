import { Input, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Actor } from '../../apis/fetchActors'
import { fetchActors } from '../../apis/fetchActors'

type InputFormProps = {
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const InputForm: React.FC<InputFormProps> = ({
    setActors,
    inputValue,
    setInputValue,
}) => {
    const handleOnChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputText = event.target.value
        setInputValue(inputText)
    }

    const getActorResult = async (inputText: string) => {
        const actorsResult = await fetchActors(inputText)
        setActors(actorsResult)
    }

    useEffect(() => {
        if (inputValue.length > 3) {
            const getData = setTimeout(() => {
                getActorResult(inputValue)
            }, 1000)

            return () => clearTimeout(getData)
        }
        if (inputValue.length < 1) {
            setActors([])
        }
    }, [inputValue])

    return (
        <Flex display-name="input-flex">
            <Input
                w="350px"
                placeholder="Enter an actor's name"
                value={inputValue}
                onChange={handleOnChange}
            />
        </Flex>
    )
}

export default InputForm
