import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className=' bg-white md:p-4 flex flex-col items-center dark:bg-zinc-900 sticky top-0 z-50 shadow-xl '>
            <header className="w-full max-w-3xl flex justify-between items-center p-2 bg-white dark:bg-zinc-800 rounded shadow-md sm:p-4 ">
                <div className="text-xl font-bold dark:text-white">Confess.io</div>

                <div className='flex gap-5'>
                    <Link to='/signup'>
                        <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded dark:border-blue-300 dark:text-blue-300">Sign up</button>
                    </Link>
                    <span className="w-10 h-10 rounded-full bg-zinc-200" src="https://placehold.co/100"></span>
                </div>

            </header>
        </div>
    )
}

export default Navbar

