import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { VscArrowRight } from 'react-icons/vsc';

const Home: NextPage = () => {

  const projects = [
    {
      title: 'Calessia',
      description: 'A full-stack web application to enhance productivity and organization for writers.',
      url: 'https://calessia.herokuapp.com/',
      tag: "It's live!",
      picture: 'https://picsum.photos/id/1/600/300',
      skills: ['React', 'Node', 'Express', 'JWT', 'Authentication', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AWS', 'SQL', 'Heroku', 'REST API']
    },
    {
      title: 'Bloggr',
      description: 'A full-stack community blogging website, complete with authentication and user permissions.',
      url: 'https://github.com/jshetler7/full-stack-blog',
      tag: "View on Github",
      picture: 'https://picsum.photos/id/10/600/300',
      skills: ['React', 'Node', 'Express', 'JWT', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'Heroku', 'REST API']
    },
    {
      title: 'Portfolio Website',
      description: 'A personal website that houses my portfolio, resume, and other professional experience.',
      url: 'https://github.com/jshetler7',
      tag: "View on Github",
      picture: 'https://picsum.photos/id/1037/600/300',
      skills: ['React', 'Next.js', 'Tailwind', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Vercel']
    },
    {
      title: 'Chirper',
      description: 'A full-stack short-form communication website, totally not a rip-off of Twitter...',
      url: 'https://github.com/jshetler7/full-stack-chirper',
      tag: "View on Github",
      picture: 'https://picsum.photos/id/130/600/300',
      skills: ['React', 'Node', 'Express', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'REST API']
    }
  ]
  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Jared Shetler Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto'>
        <h1 className={styles.title}>
          Portfolio
        </h1>

        <div className='grid grid-cols-3 gap-y-10'>
          {projects.map(data => (
            <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={data.picture} alt="" />
              <div className="p-5" id='card-body'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                <div className="mb-5">
                  {data.skills.map(item => (
                    <span className="inline-flex items-center py-1 px-1 m-1 text-sm font-medium text-center text-white bg-blue-300 rounded-lg dark:bg-blue-600">{item}</span>
                  ))}
                </div>
                <a href={data.url} target='_blank' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600">
                    {data.tag}
                    <VscArrowRight size={14}/>
                </a>
              </div>
            </div>
          ))}

          


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
