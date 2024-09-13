import React from 'react'

import styles from './styles.module.css'
import Head from './head'

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head />
            <nav>About nav</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
