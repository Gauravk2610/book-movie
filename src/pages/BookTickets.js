import React, { useState } from 'react'

const seating = [
    {
        seatType: 'PRIME ',
        cost: 600,
        seats: [
            ['&nbsp;', '&nbsp;', 5, 4, 3, 2, 1],
            [ 10, 9, 8, '&nbsp;', 7, 6, '&nbsp;'],
            ['&nbsp;', 15, 14, 13, 12, 11, '&nbsp;'],
            [21, '&nbsp;', 20, 19, 18, 17, 16],
        ]
    },
    {
        seatType: 'PRIME PLUS',
        cost: 1200,
        seats: [
            [ 1, 2, 3, 4, 5, 6, 7],
            [ '&nbsp;', 11, 12, '&nbsp;', 8, 9, '&nbsp;'],
        ]
    },
]

const booked = [10, 16]

function BookTickets() {
    const [selected, setSelected] = useState([13, 1])

    const updateSeat = (seat_no) => {
        console.log(selected.includes(seat_no))
        if(!selected.includes(seat_no) && seat_no !== '&nbsp;' && !booked.includes(seat_no)){
            setSelected([...selected, seat_no])
            return 
        }
        return setSelected(selected.filter((data) => data !== seat_no))
    }

    return (
        <div>
            <div class="container mx-auto max-w-lg">
                <div class="screen bg-white w-full h-16 my-4 "></div>
                <h1 className='text-center -mt-2 '>Screen this side</h1>

                <table className="mx-auto">
                    <div className='flex justify-center flex-wrap my-6'>
                        <div className='flex items-center space-x-2 mr-4 mb-4'>
                            <div className='h-7 w-7 sm:w-8 sm:h-8 rounded-t-[10px] bg-white' />
                            <div>Available</div>
                        </div>
                        <div className='flex items-center space-x-2 mr-4 mb-4'>
                            <div className='h-7 w-7 sm:w-8 sm:h-8 rounded-t-[10px] bg-[#6feaf6]' />
                            <div>Selected</div>
                        </div>
                        <div className='flex items-center space-x-2 mr-4 mb-4'>
                            <div className='h-7 w-7 sm:w-8 sm:h-8 rounded-t-[10px] bg-gray-600' />
                            <div>Booked</div>
                        </div>
                    </div>
                    <tbody>
                        {
                            seating.map((data, index) => (
                                <div className='mt-6' key={index}>
                                    <tr><td>{data.seatType} ${data.cost}</td></tr>
                                    <hr className='w-full' />
                                    {data.seats.map((seat, index) => (
                                        <tr key={index}>
                                            <td className='flex'>
                                                {
                                                    seat.map((data, index) => (
                                                        <div 
                                                            onClick={() => updateSeat(data)} 
                                                            className={`h-7 w-7 sm:w-8 sm:h-8 
                                                                        ${data !== '&nbsp;' && 'border-2 bg-white cursor-pointer hover:scale-110 transition-all duration-300' } 
                                                                        ${selected.includes(data) && 'bg-[#6feaf6] border-[#6feaf6]'} 
                                                                        ${booked.includes(data) && 'bg-gray-600 border-gray-600 !text-white'}
                                                                        border-white text-black text-center rounded-t-[10px] m-2 sm:m-4`} 
                                                            key={index} 
                                                            dangerouslySetInnerHTML={{__html: data}}>
                                                            </div>
                                                        ))
                                                    }
                                            </td>
                                        </tr>
                                    ))}
                                </div>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookTickets