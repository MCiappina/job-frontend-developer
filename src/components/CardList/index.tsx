import { useVideos } from '@/hooks/youtube-api/useVideos';
import { useModalStore, useSearchStore } from '@/stores/store';
import React from 'react'
import YouTubeModal from '../Modal';
import * as S from './style';

const CardItem = ({ video }: any) => {
    const { openModal, selectVideo } = useModalStore();

  const handleItemClick = () => {
    selectVideo(video)
    openModal();
  };
    return (
        <S.CardItem onClick={handleItemClick} $hasData={video?.id?.videoId}>
            <S.CardImg src={video?.snippet?.thumbnails?.high?.url} alt="" />
            <S.CardTitle>{video?.snippet?.title}</S.CardTitle>
            <S.CardDescription>{video?.snippet?.description}</S.CardDescription>
        </S.CardItem>
    )

}

const CardList = () => {
    const { searchQuery } = useSearchStore();
    const { data: videos, isLoading, isError } = useVideos(searchQuery);

    if (!videos) return;

    return (
        <S.CardsContainer $hasData={Boolean(videos?.items?.length)}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

            {Boolean(videos?.items?.length) && (
                <>
                    {videos?.items?.map((video) => (
                        <CardItem key={video.id.videoId} video={video} />
                    ))}
                </>
            )}
        </S.CardsContainer>
    )
}

export default CardList