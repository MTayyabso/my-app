import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const lable = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-5 items-center lg:px-16 px-4 lg:py-6 py-10 justify-between'>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/amazon.png'
        />
        </Link>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/drille.png'
        />
        </Link>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/hubspot.png'
        />
        </Link>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/Vector.png'
        />
        </Link>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/netflix.png'
        />
        </Link>
        <Link href='/'>
        <Image
        width={126}
        height={48}
        alt='amazon'
        src='/zoom.png'
        />
        </Link>
      </div>
    </div>
  )
}

export default lable
