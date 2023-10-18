import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='h-[50px] w-full max-w-[200px]'>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <Image src="/next.svg" layout='fill' objectFit='contain' alt="Logo" />
        </div>
    </Link>
  )
}

export default Logo