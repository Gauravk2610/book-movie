import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../request/instance'
import apiKey from './apiKey'
import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid'
const base_url = "https://image.tmdb.org/t/p/original";

const languages = ['Hindi', 'English', 'Tamil', 'Telugu']

const starCast = {
    'The Batman': ['Robert Pattinson', 'Zoë Kravitz', 'Jeffrey Wright', 'Colin Farrell', 'Paul Dano', '	John Turturro'],
    'Scream': ['Melissa Barrera', 'Mason Gooding', 'Jenna Ortega', 'Jack Quaid', 'Marley Shelton', 'Neve Campbell'],
    'Kimi': ['Zoe Kravitz', 'Steven Soderbergh', 'Petter Andrewz'],
    'Spider-Man: No Way Home': ['Tom Holland', 'Zendaya', 'Benedict', 'Cumberbactch', 'Jacob batalon', 'Afred Molina'],
    "The King's Man": ['Taron Egerton', 'Halle Berry', 'Mark Strong', 'Ralph Finnes']
}


function Movie() {

    // React Router Variables
    const navigate = useNavigate()
    
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
            <div className='flex flex-col space-y-8 lg:space-y-0 lg:flex-row px-6 py-4 justify-between items-center min-h-[480px] h-full w-full bg-cover bg-no-repeat' style={{ backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url(${base_url + movieData?.backdrop_path})` , backgroundColor: 'black'}}>
                {/* image poster */}
                <div className='relative'>
                    <img className=' z-10 rounded-xl poster sm:w-[380px] h-full relative object-contain' src={base_url + movieData?.poster_path} alt="" />
                    <iframe className='trailer max-w-[360px] w-full h-full rounded-xl absolute top-0' width=""  src="https://www.youtube.com/embed/kl8F-8tR8to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='flex flex-col justify-between flex-1 min-h-[440px]  lg:ml-6'>
                    <div className='mr-auto space-y-4'>
                        {/* Title */}
                        <h1 className='text-2xl sm:text-3xl font-semibold'>{movieData?.title}</h1>
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
                        <div className='flex flex-wrap items-center md:space-x-4'>
                            {
                                movieData?.genres.map((type, index) => (
                                    <div key={index} className='bg-white text-base sm:text-xl px-2 rounded-lg hover:underline cursor-pointer text-black mr-4 mb-4 '>{type.name}</div>
                                ))
                            }
                        </div>
                        {/* Quality */}
                        <div className="flex flex-wrap bg-white w-fit px-4 rounded-lg text-black text-base sm:text-lg">
                            2D, 2D SCREEN X ,4DX, MX4D, IMAX 2D
                        </div>
                        {/* Languages */}
                        <div className='flex flex-wrap items-center md:space-x-4'>
                            {
                                languages.map((type, index) => (
                                    <div key={index} className='bg-white text-base sm:text-lg px-2 rounded-lg hover:underline cursor-pointer text-black mr-4 mb-4 '>{type}</div>
                                ))
                            }
                        </div>
                        {/* Star Cast */}
                        <div className='flex flex-wrap items-center '>
                            <span className='text-xl px-2 mb-4'>Cast: </span>
                            {
                                starCast[movieData?.title]?.map((type, index) => (
                                    <div key={index} className='bg-white text-base sm:text-lg px-2 rounded-lg hover:underline cursor-pointer text-black mr-4 mb-4 '>{type}</div>
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
                    <div className='mt-8'>
                        <button onClick={() => navigate(`/movie/${movie_id}/book_tickets`)} className='bg-[#df0e62] w-48 rounded-lg h-14'>Book tickets</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie