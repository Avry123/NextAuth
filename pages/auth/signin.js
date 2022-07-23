import React from 'react'
import { getProviders, signIn as signInProvider } from "next-auth/react"

function signin({providers}) {
   
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'> 
   <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
          className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
          onClick={() => signInProvider(provider.id, {callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    </div>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers},
    }
}

export default signin