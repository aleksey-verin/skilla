import React from 'react'
import SidebarBtn from '../commonUI/SidebarBtn'

const Actions = () => {
  return (
    <div className="sidebar-actions">
      <SidebarBtn text="Добавить заказ" pic="plus" />
      <SidebarBtn text="Оплата" pic="attention" />
    </div>
  )
}

export default Actions
