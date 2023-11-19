import React, { FC, FormEvent, useDeferredValue, } from 'react'
import { useSearchStore } from '@/stores/store'
import Input from '../Input'
import Button from '../Button'
import { useVideos } from '@/hooks/youtube-api/useVideos'

const SearchForm: FC = () => {
    const { searchQuery, changeSearchQuery } = useSearchStore();
    const { refetch } = useVideos(searchQuery);

    const handleChange = (value: string) => {
        changeSearchQuery(value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        refetch();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input label="Search" type="text" placeholder='Digite o nome de um artista' value={searchQuery} handleChange={(value) => handleChange(value)} />
                <Button type='submit'>Submit</Button>
            </form>
        </>
    )
}

export default SearchForm