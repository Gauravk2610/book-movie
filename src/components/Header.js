import React from 'react'
import { SearchIcon, ChevronDownIcon, FilmIcon, VideoCameraIcon, CreditCardIcon, SpeakerphoneIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='flex justify-center header'>
                <div className='max-w-7xl  w-full h-20 flex justify-between items-center'>
                    <Link to={`/`}>
                        <div className='text-3xl '>Book-Movie</div>
                    </Link>
                    <div className='flex items-center mr-auto mx-6 border-[#df0e62] rounded-lg py-2 px-3 border-2 max-w-lg w-full'>
                        <SearchIcon className='w-5 h-5 text-white' />
                        <input className='outline-none focus:ring-0 ml-3 text-white bg-inherit w-full' type="text" placeholder='Search for Movies' />
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center cursor-pointer'>Mumbai <ChevronDownIcon className='w-5 h-5 ml-2' /> </div>
                        <div className='bg-[#df0e62] py-2 px-6 rounded-lg cursor-pointer' >Login</div>
                    </div>
                </div>
            </div>  
            <div className="flex justify-center header-links">
                <div className='max-w-7xl w-full h-10 flex justify-between items-center'>
                    <ul className='flex space-x-4 items-center h-full'>
                        <li className='h-links'><a className='flex items-center' href="#">Movies <FilmIcon className='icons-header' /></a></li>
                        <li className='h-links'><a className='flex items-center' href="#">Cinemas <VideoCameraIcon className='icons-header' /></a></li>
                        <li className='h-links'><a className='flex items-center' href="#">Merchandise <CreditCardIcon className='icons-header' /></a></li>
                        <li className='h-links'><a className='flex items-center' href="#">Promotions <SpeakerphoneIcon className='icons-header' /></a></li>
                        <li className='h-links'><a href="#">Voucher</a></li>
                    </ul>
                    <ul className='flex space-x-4 items-center h-full'>
                        <li className='h-links'><a href="#">More</a></li>
                        <li className='h-links'><a href="#">Offers</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header