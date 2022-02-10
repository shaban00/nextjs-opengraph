import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

type OrganizationData = {
    company: string;
    role?: string;
    logo: string;
};

const Home: NextPage = () => {
    const data: OrganizationData = {
        company: "Arc Exclusive LLC",
        role: "Senior Software Engineer",
        logo: "https://findlogovector.com/wp-content/uploads/2020/01/arc-document-solutions-logo-vector.png",
    };

    return (
        <div className={styles.container}>
            <Header title="Welcome to Tenarch" meta_og_title={`Your invite to interview with ${data?.company} on Tenarch.`} meta_og_description={`${data?.company} is using Tenarch to help them build a fast & fair hiring process. This is the first step in the process where we can tell you about the role and learn what you are looking for.`} meta_og_image={`${data?.logo}`} meta_og_type="website" />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">Pinnacle Opengraph Metadata Testing</a>
                </h1>

                <p className={styles.description}>Testing Pinnacle Opengraph Metadata By Shaban!! (@shaban00)</p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
                        <h2>Deploy &rarr;</h2>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Powered by Tenarch
                </a>
            </footer>
        </div>
    );
};

export default Home;
