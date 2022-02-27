import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../request/instance'
import apiKey from './apiKey'
import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid'
const base_url = "https://image.tmdb.org/t/p/original";

const languages = ['Hindi', 'English', 'Tamil', 'Telugu']

function Movie() {
    
    const { movie_id } = useParams()
    const [movieData, setMovieData] = useState()

    const getMovie = async() => {
        const response = await instance.get(`/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
        console.log(response.data)
        setMovieData(response.data)
    }

    useEffect(() => {
        return getMovie()
    }, [movie_id])

    return (
        <div className='py-6'>
            {/* banner */}
            <div className='flex px-6 py-4 justify-between items-center min-h-[480px] max-h-[520px] h-full w-full bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url(${base_url + movieData?.backdrop_path})` , backgroundColor: 'black'}}>
                {/* image poster */}
                <img className='rounded-xl max-h-[440px] object-contain' src={base_url + movieData?.poster_path} alt="" />
                <div className='flex flex-col justify-between flex-1 min-h-[440px]  ml-6'>
                    <div className='mr-auto space-y-4'>
                        {/* Title */}
                        <h1 className=' text-3xl font-semibold'>{movieData?.title}</h1>
                        {/* Likes and Rating */}
                        <div className='flex items-center text-xl space-x-4'>
                            <div className='flex items-center'>
                                <HeartIcon className='w-8 h-8 text-red-600 mr-2' />
                                {movieData?.vote_average*10}%
                            </div>
                            <div className='flex items-center'>
                                <ThumbUpIcon className='w-8 h-8 text-blue-600 mr-2' />
                                {movieData?.vote_count}
                            </div>
                        </div>
                        {/* Movie Type */}
                        <div className='flex flex-wrap items-center space-x-4'>
                            {
                                movieData?.genres.map((type, index) => (
                                    <div key={index} className='bg-white text-xl px-2 rounded-lg hover:underline cursor-pointer text-black '>{type.name}</div>
                                ))
                            }
                        </div>
                        {/* Quality */}
                        <div className="flex flex-wrap bg-white w-fit px-4 rounded-lg text-black text-lg">
                            2D, 2D SCREEN X ,4DX, MX4D, IMAX 2D
                        </div>
                        {/* Languages */}
                        <div className='flex flex-wrap items-center space-x-4'>
                            {
                                languages.map((type, index) => (
                                    <div key={index} className='bg-white text-lg px-2 rounded-lg hover:underline cursor-pointer text-black '>{type}</div>
                                ))
                            }
                        </div>
                        {/* Overview */}
                        <div>{movieData?.overview}</div>
                        {/* Time and date */}
                        <div className='flex space-x-4'>
                            <div>1h 58min</div>
                            <div>{movieData?.release_date}</div>
                        </div>
                    </div>

                    {/* Book Tickets Button */}
                    <div className=''>
                        <button className='bg-[#df0e62] w-48 rounded-lg h-14'>Book tickets</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie