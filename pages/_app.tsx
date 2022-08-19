import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  console.log("%cIf you like what you see, I'd love to work with you!", 'background: linear-gradient(153deg,#8fdceb,#142e64); padding: 2em; font-size: 2em; font-weight: bold; color: white');
  console.log("%cEmail me >>> jshetler7@gmail.com", 'background: linear-gradient(153deg,#8fdceb,#142e64); padding: 1em; font-size: 2em; font-weight: bold; color: white');

  return <>
    <div className='bg-slate-100 dark:bg-gray-900'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>

}

export default MyApp
