import React, { FC, FormEvent, useDeferredValue, } from 'react'
import { useSearchStore } from '@/stores/store'
import Input from '../Input'
import Button from '../Button'
import { useVideos } from '@/hooks/youtube-api/useVideos'
import { useAttractions } from '@/hooks/ticketmaster-api/useAttractions'
import * as S from './style'
import searchIcon from '@/assets/images/magnifying-glass.png';

const SearchForm: FC = () => {
    const { searchQuery, changeSearchQuery } = useSearchStore();
    const { data: videos, refetch: videosFetch } = useVideos(searchQuery);
    const { refetch: attractionsFetch } = useAttractions(searchQuery);

    const handleChange = (value: string) => {
        changeSearchQuery(value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        videosFetch();
        attractionsFetch();
    }

    return (
        <>
            <S.SearchForm onSubmit={handleSubmit} $hasData={Boolean(videos?.items?.length)}>
                <Input required type="text" placeholder='Digite o nome de um artista' value={searchQuery} handleChange={(value) => handleChange(value)} />
                <Button type='submit'><S.ButtonImg src={searchIcon.src} /></Button>
            </S.SearchForm>
        </>
    )
}

export default SearchForm