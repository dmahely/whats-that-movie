import { Input, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Actor } from '../../types/types'
import { fetchActors } from '../../apis/fetchActors'
import { useState } from 'react'
import { Loading } from '../Loading/Loading'

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
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleOnChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputText = event.target.value
        setInputValue(inputText)
    }

    const getActorResult = async (inputText: string) => {
        const actorsResult = await fetchActors(inputText)
        setIsLoading(false)
        setActors(actorsResult)
    }

    useEffect(() => {
        if (inputValue.length > 3) {
            setIsLoading(true)
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
        <VStack display-name="input-vstack">
            <Input
                w="350px"
                placeholder="Enter an actor's name"
                value={inputValue}
                onChange={handleOnChange}
            />
            {isLoading && <Loading />}
        </VStack>
    )
}

export default InputForm
