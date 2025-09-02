import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'

export default function NavBar() {
  return (
    <div className="w-full flex justify-evenly items-center bg-black">
      <p className="text-2xl text-white">LocalSwitcher Nav Bar</p>
      <LocaleSwitcher />
    </div>
  )
}
