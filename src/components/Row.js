import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import instance from '../request/instance'
import RowCard from './RowCard';
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            // console.log(request.data.results)
            setMovies(request.data.results);
            return request;
        }
          fetchData();
    },[fetchUrl])

    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <a className='text-[#df0e62] text-xl hover:underline ' href="#">Show all</a>
            </div>
            <div className='Row__Card w-full flex space-x-6 overflow-x-scroll'>
                {
                    movies.map((data, index) => (
                        <Link key={index} to={`/movie/${data.id}`}>
                            <RowCard key={index} img={base_url + data.poster_path} title={data.title} vote={data.vote_average} />
                        </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Row