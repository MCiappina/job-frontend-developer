import { useAttractions } from '@/hooks/ticketmaster-api/useAttractions';
import { useSearchStore } from '@/stores/store';
import React from 'react'

const ArtistCard = () => {
    const { searchQuery } = useSearchStore();
    const { data: attractionResponse, isLoading, isError } = useAttractions(searchQuery);


    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

            {attractionResponse?._embedded?.attractions?.length ? (
                <div>
                    {attractionResponse?._embedded?.attractions[0].name}
                </div>
            ) : null}
        </div>
    )
}

export default ArtistCard