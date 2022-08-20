import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

const Document = dynamic(import('../../components/Document'), { ssr: false });
const Resume: NextPage = () => {
    return(
        <main>
            <Document />

            <footer className={styles.footer}>
                <div className='dark:text-white'>
                <p>Copyright © 2022 Jared Shetler.</p>
                Email Me: jshetler7@gmail.com
                </div>
            </footer>
        </main>
    )
}

export default Resume;