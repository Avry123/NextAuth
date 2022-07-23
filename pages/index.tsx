import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'



const Home: NextPage = () => {
 
  const {data} : any = useSession();

  console.log(data);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        { data ? (
          <>
           <img 
           src={data?.user?.image} 
           alt='profile'
           onClick={() => {signOut()}} 
           className='h-1/4 rounded-full cursor-pointer' />
           <h1
           className='text-lg mt-5'
           >{data?.user?.name}</h1>
          </>
        ) : (
          <>
          <Button
          variant="text"
          onClick={() => {signIn()}}
          >Sign In</Button>
          </>
        )}
    </div>
  )
}

export default Home
