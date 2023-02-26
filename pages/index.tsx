import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

const Home: NextPage = () => {

  // useEffect(() => {
  //   Promise.allSettled([
  //     fetch('https://calessia.fly.dev/')
  //   ])
  //   .then(resArray => Promise.allSettled(resArray.map(res => res.status === 'fulfilled' ? res.value.json() : Promise.reject('Failed :('))))
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));
  // }, []);

  return (
    <div>


      <main className='container mx-auto'>
        <h1 className="text-6xl text-center text-black mt-5 dark:text-white">
          Hello There!
        </h1>
        <section className="grid grid-rows-1 mb-10">
          <div className='border rounded-xl border-slate-200 shadow-xl bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-lg p-1 justify-self-center mt-5 text-center text-gray-400 dark:text-gray-200'>
              August 2022
              <p className='text-center text-xl text-black dark:text-white'>Built and Deployed Two Full-Stack Applications</p>
              <a href='https://calessia.herokuapp.com/' className='text-lg'>Calessia, </a>
              <p className='text-lg'>Portfolio</p>
            </div>
            {/* Line */}
            <div className='bar w-1 justify-self-center relative gradient-background'></div>
            {/* Line */}
            <div className='border rounded-xl border-slate-200 shadow-xl bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-lg p-1 justify-self-center text-center text-gray-400 dark:text-gray-200'>
              August 2022
              <p className='text-center text-xl text-black dark:text-white'>Graduated Catalyst Full-Stack Development Bootcamp</p>
              <a href='https://covalence.io/' className='text-lg'>Covalence</a>
            </div>
            {/* Line */}
            <div className='bar w-1 justify-self-center relative gradient-background'></div>
            {/* Line */}
            <div className='border rounded-xl border-slate-200 shadow-xl bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-lg p-1 justify-self-center text-center text-gray-400 dark:text-gray-200'>
              December 2021
              <p className='text-center text-xl text-black dark:text-white'>Graduated From Middle Tennessee State University</p>
              <p className='text-lg'>B.S. History</p>
            </div>
            {/* Line */}
            <div className='bar w-1 justify-self-center relative gradient-background'></div>
            {/* Line */}
            
            <div className='border rounded-xl border-slate-200 shadow-xl bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 w-full max-w-lg p-1 justify-self-center text-center text-gray-400 dark:text-gray-200'>
              September 2020 - December 2021
              <p className='text-center text-xl text-black dark:text-white'>Crafted And Sold The Most Delicious Beverages</p>
              <p className='text-lg'>Starbucks</p>
            </div>

        </section>
      </main>

      <footer className={styles.footer}>
        <div className='dark:text-white'>
          <p>Copyright © 2022 Jared Shetler.</p>
          Email Me: jshetler7@gmail.com
        </div>
      </footer>
    </div>
  )
}

export default Home;