'use client'
import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'
import { useState } from 'react'



export default function Home() {
  const [visible, setVisible]=useState(true)
  const handleState=()=> {
    
    setVisible(!visible);
  }
  return (<>
    <Navigation visibility={visible}/>
    <main className="">
      <button onClick={handleState}>Hola</button>
      
    </main>

    </>
  )
}
