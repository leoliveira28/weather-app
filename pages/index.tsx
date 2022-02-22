import type { NextPage } from 'next'
import Head from 'next/head'

import { InputCity } from '../src/components/InputCity'




export default function Home()
 {
  return (
    <>
    <Head>
      <title>Weather App</title>
    </Head>
        
      <InputCity/>  
        
    
    </>
  )
}


