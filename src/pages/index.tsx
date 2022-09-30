import type { NextPage } from 'next'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Head from "next/head";

import styles from "../styles/pages/Home.module.css"
import { ChallengeBox } from '../components/ChallengeBox'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <Head>
        <title>Home | shake.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}

export default Home
