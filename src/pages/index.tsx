import ArtistCard from '@/components/ArtistCard'
import CardList from '@/components/CardList'
import SearchForm from '@/components/SearchForm'
import Head from 'next/head'
import * as S from '../styles/globals'
import YouTubeModal from '@/components/Modal'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dolado Test</title>
        <meta name="description" content="Web app to search for youtube videos related to artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <S.Container>
          <SearchForm />
          <S.MainContent>
            <ArtistCard />
            <CardList />
          </S.MainContent>
        </S.Container>
      </>
      <YouTubeModal />
    </>
  )
}
