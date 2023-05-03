import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index"/>
    </>
  )
}
