import { useVideos } from '@/hooks/youtube-api/useVideos';
import { useSearchStore } from '@/stores/store';
import React from 'react'

const CardItem = ({ video }: any) => {
    return (
        <li key={video.id.videoId}>{video.snippet.title}</li>
    )

}

const CardList = () => {
    const { searchQuery } = useSearchStore();
    const { data: videos, isLoading, isError } = useVideos(searchQuery);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

            {videos && (
                <ul>
                    {videos?.items?.map((video) => (
                        <CardItem key={video.id.videoId} video={video} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CardList