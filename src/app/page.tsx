import styles from "./page.module.css";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import peakLogo from "./../assets/peak-logo.svg";

export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                src={peakLogo}
                width={300}
                height={300}
                alt="Picture of Peak, the logo of Peak Fitness App"
                className={styles.logoImage}
            />
            <h3>Peak Fitness App</h3>
            <p>Native Android & iOS mobile application</p>
            <p>Application In Development</p>
            <a href="https://github.com/peak-fitness-app">
                <FiGithub />
                GitHub
            </a>
        </main>
    );
}
