import { useAttractions } from '@/hooks/ticketmaster-api/useAttractions';
import { useSearchStore } from '@/stores/store';
import React from 'react'
import * as S from './style'
import instagramLogo from '@/assets/images/instagram.svg'
import facebookLogo from '@/assets/images/facebook.svg'
import twitter from '@/assets/images/twitter.svg'

const ArtistCard = () => {
    const { searchQuery } = useSearchStore();
    const { data: attractionResponse, isLoading, isError } = useAttractions(searchQuery);

    if (!attractionResponse) return;

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

            {attractionResponse?._embedded?.attractions?.length ? (
                <S.ArtistCard>
                    <S.ImageWrapper>
                        <img src={attractionResponse?._embedded?.attractions[0].images[0].url} />
                    </S.ImageWrapper>
                    <S.ArtistInfoWrapper>
                        <S.ArtistName className="profile-username">{attractionResponse?._embedded?.attractions[0].name}</S.ArtistName>
                        <S.ArtistGenre className="profile-user-handle">{attractionResponse?._embedded?.attractions[0].classifications[0].genre?.name}</S.ArtistGenre>
                    </S.ArtistInfoWrapper>
                    <S.ArtistLinkWrapper className="profile-links">
                        {attractionResponse?._embedded?.attractions[0].externalLinks?.facebook?.length && (<S.ArtistLink href={attractionResponse?._embedded?.attractions[0].externalLinks?.facebook[0].url ?? ''} target="_blank" className="link link--icon">
                            <img src={facebookLogo.src} />
                        </S.ArtistLink>)}

                        {attractionResponse?._embedded?.attractions[0].externalLinks?.twitter?.length && (<S.ArtistLink href={attractionResponse?._embedded?.attractions[0].externalLinks?.twitter[0].url ?? ''} target="_blank" className="link link--icon">
                            <img src={twitter.src} />
                        </S.ArtistLink>)}

                        {attractionResponse?._embedded?.attractions[0].externalLinks?.instagram?.length && <S.ArtistLink href={attractionResponse?._embedded?.attractions[0].externalLinks?.instagram[0].url ?? ''} target="_blank" className="link link--icon">
                            <img src={instagramLogo.src} />
                        </S.ArtistLink>}

                    </S.ArtistLinkWrapper>
                </S.ArtistCard>
            ) : null}
        </>
    )
}

export default ArtistCard