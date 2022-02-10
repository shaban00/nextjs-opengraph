import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header title="Welcome to Pinnacle!" meta_og_title="Pinnacle Opengraph Metadata Testing By Shaban" meta_og_description="Pinnacle Opengraph Metadata Testing By Shaban Using Next.js" meta_og_image="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" meta_og_url="https://pinnacle.tenarch.com/" meta_og_type="website" />
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
