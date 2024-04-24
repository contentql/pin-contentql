import Image from 'next/image'
import * as React from 'react'

function Icon() {
  const test = React.useState()
  return (
    <div className='logo'>
      <Image
        src='/images/favicon.ico'
        width={28}
        height={28}
        alt='ContentQL Favicon'
      />
    </div>
  )
}
export default Icon
