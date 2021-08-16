import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
    return (
        <div>
            <Header/>
                <main className="flex bg-black text-blue-400">
                    <section>
                        <p className="text-xs text-white">
                            300+ Stays for 5 numer of guests
                        </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                        <div className="hidden lg:inline-flex">
                            <p className="px-4 py-2 border rounded-full border-blue-400 text-white cursor-pointer active:scale-95 active:bg-gray-800 active:text-blue-400 transition transform duration-100 ease-out">Cancellation Flexibility</p>
                        </div>
                    </section>
                </main>

            <Footer/>
        </div>
    )
}

export default Search