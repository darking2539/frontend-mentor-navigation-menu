import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="justify-between items-center md:flex flex-row md:w-auto md:order-1">
                        <p className="self-center text-2xl md:text-3xl whitespace-nowrap font-bold">snap</p>
                        <ul className="hidden md:flex flex-col font-medium md:flex-row md:space-x-8 md:mt-2 ml-8">
                            <li>
                                <a href="#" className="block py-2">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center md:mt-2 md:order-2">
                        <a href="#" className="text-gray-800 dark: hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 md:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                        <a href="#" className="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 md:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Register</a>
                    </div>
                    <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
            </nav>
        </header>

    )
}
