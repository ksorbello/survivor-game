import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Logout from '../components/Logout'

const Home = async () =>  {
    const session = await auth()

    if(!session?.user) return redirect('/')
  return (
    <div>
      <h1>{session.user.name}</h1>
     {(session.user.image && session.user.name) && <Image
      src={session?.user?.image}
      alt={session.user.name}
      width={72}
      height={72}
      /> } 
    <Logout/>
    </div>

  )
}
export default Home
