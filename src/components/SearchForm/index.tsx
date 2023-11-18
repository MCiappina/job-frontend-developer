import React, { FC, FormEvent } from 'react'
import { useSearchStore } from '@/stores/store'
import Input from '../Input'
import Button from '../Button'

const SearchForm: FC = () => {
    const { searchQuery, changeSearchQuery } = useSearchStore();

    const handleChange = (value: string) => {
        changeSearchQuery(value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(searchQuery)
        // TODO chamadas pra API com React Query
    }


    return (
        <form onSubmit={handleSubmit}>
            <Input label="Search" type="text" placeholder='Digite o nome de um artista' value={searchQuery} handleChange={(value) => handleChange(value)} />
            <Button type='submit'>Submit</Button>
        </form>
    )
}

export default SearchForm