import React from 'react'
import Actions from './Sidebar/Actions'
import Logo from './Sidebar/Logo'
import Menu from './Sidebar/Menu'

const Sidebar = () => {
  return (
    <menu className="sidebar">
      <Logo />
      <Menu />
      <Actions />
    </menu>
  )
}

export default Sidebar
