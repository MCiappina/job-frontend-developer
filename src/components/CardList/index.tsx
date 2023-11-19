import { useVideos } from '@/hooks/youtube-api/useVideos';
import { useModalStore, useSearchStore } from '@/stores/store';
import React from 'react'
import YouTubeModal from '../Modal';

const CardItem = ({ video }: any) => {
    const { openModal, selectVideo } = useModalStore();

  const handleItemClick = () => {
    selectVideo(video)
    openModal();
  };
    return (
        <li key={video.id.videoId} onClick={handleItemClick}>{video.snippet.title}</li>
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
            <YouTubeModal />
        </div>
    )
}

export default CardList