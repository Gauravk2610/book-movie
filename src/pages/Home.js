import React from 'react'
import LatestMovies from '../components/LatestMovies'
import Row from '../components/Row'
import requests from '../request/request'

function Home() {
    return (
        <div>
            <LatestMovies />
            <div className="py-10 space-y-8">
                <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
                <Row title="Popular" fetchUrl={requests.fetchPopular} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Upcoming" fetchUrl={requests.fetchUpComing} />
                <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

            </div>
        </div>
    )
}

export default Home