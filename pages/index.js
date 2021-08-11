import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>WildHashGhost_airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
      <main className="max-w-7xl bg-black text-blue-400 border-2 border-blue-400">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
        </section>
      </main>

    </div>
  )
}
