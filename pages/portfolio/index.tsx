import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { VscArrowRight } from 'react-icons/vsc';
import { AiOutlineGithub } from 'react-icons/ai';
import { useEffect } from 'react';

const Portfolio: NextPage = () => {

  const projects = [
    {
      title: 'Calessia',
      description: 'A full-stack web application to enhance productivity and organization for writers.',
      details: "",
      url: 'https://calessia.fly.dev/',
      Github: 'https://github.com/jshetler7',
      tagHub: 'View on Github',
      tagLive: "It's live!",
      picture: 'https://picsum.photos/id/1/600/300',
      skills: ['React', 'Node', 'Express', 'JWT', 'Auth', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AWS', 'SQL', 'Heroku', 'REST API']
    },
    {
      title: 'Portfolio Website',
      description: "A personal website that houses my portfolio, resume, and other professional experience. You're looking at it!",
      details: "",
      url: '',
      Github: 'https://github.com/jshetler7/portfolio-site',
      tagLive: "It's Live!",
      tagHub: "View on Github",
      picture: 'https://picsum.photos/id/1037/600/300',
      skills: ['React', 'Next.js', 'Tailwind', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Vercel']
    },
    {
      title: 'Bloggr',
      description: 'A full-stack community blogging website, complete with authentication and user permissions.',
      details: "",
      url: 'https://bloggr-full.herokuapp.com/',
      Github: 'https://github.com/jshetler7/full-stack-blog',
      tagLive: "It's Live!",
      tagHub: "View on Github",
      isHidden: 'hidden',
      picture: 'https://picsum.photos/id/10/600/300',
      skills: ['React', 'Node', 'Express', 'JWT', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'Heroku', 'REST API']
    },
    {
      title: 'Chirper',
      description: 'A full-stack short-form communication website, totally not a rip-off of Twitter...',
      details: "",
      url: '',
      Github: 'https://github.com/jshetler7/full-stack-chirper',
      tagLive: "It's Live!",
      tagHub: "View on Github",
      isHidden: 'hidden',
      picture: 'https://picsum.photos/id/130/600/300',
      skills: ['React', 'Node', 'Express', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'REST API']
    }
  ]
  
  const styleDark = { color: "white", fontSize: "1.5em" }
  const styleLight = { color: "black", fontSize: "1.5em" }

  return (
    <div className='pt-5'>


      <main className='mx-auto'>
      <section className='grid grid-cols-1 mb-5'>
          <a href="https://github.com/jshetler7" target='_blank' rel="noreferrer" className="place-self-center flex flex-col items-center bg-white rounded-lg border shadow-lg max-w-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
            <AiOutlineGithub style={styleLight} className='object-cover w-1/2 h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg dark:hidden'/>
            <AiOutlineGithub style={styleDark} className='object-cover w-1/2 h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg hidden dark:inline-block'/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Github - Jared Shetler</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">My Github profile has a record of every assignment, lab, and project that I completed during the months that I worked toward my certification. Feel free to click here and check it out!</p>
            </div>
          </a>
        </section>
        <h1 className='text-5xl font-semibold py-2 text-center text-black dark:text-white'>Full-Stack Applications</h1>
        <hr className='mb-5 border border-gray-300'/>
        <section className='grid grid-cols-1 gap-y-10 mb-10'>
          {projects.map(data => (
            <div id='card' key={data.title} className="place-self-center mt-5 max-w-md 2xl:w-1/2 rounded-lg border border-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:bg-gray-800">
                <Image className="rounded-t-lg" src={data.picture} width={600} height={300} alt="" />
              <div className="" id='card-body'>
                  <h5 className="ml-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                <p className="ml-1 font-medium md:font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                <div className="grid grid-rows-3 grid-cols-4 md:grid-cols-5 mt-2 mb-5">
                  {data.skills.map(item => (
                    <span key={`${item}-${data.title}`} className="items-center py-1 px-1 m-1 text-sm font-medium text-center text-white bg-blue-300 rounded-lg dark:bg-sky-600">{item}</span>
                  ))}
                </div>
                <div className='grid place-self-end'>
                    <a href={data.Github} target='_blank' rel="noreferrer" className="inline-flex place-self-end items-center py-2 px-3 mr-2 mb-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg dark:text-white dark:bg-green-600">
                        {data.tagHub}
                        <VscArrowRight size={14}/>
                    </a>
                </div>
                <div className={`grid place-self-end ${data.isHidden}`}>
                    <a href={data.url} target='_blank' rel="noreferrer" className="inline-flex place-self-end items-center py-2 px-3 mr-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:text-black dark:bg-neutral-100">
                        {data.tagLive}
                        <VscArrowRight size={14}/>
                    </a>
                </div>
              </div>
            </div>
          ))}
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

export default Portfolio;


