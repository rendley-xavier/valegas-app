import React, { useState } from 'react'
import { Menu as AntMenu, type MenuProps } from 'antd'
import { menuItems } from '../../utils/constants'

import './styles.css'

const Menu: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState('')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e)
    setCurrentMenu(e.key)
  }

  return (
    <AntMenu
      onClick={onClick}
      selectedKeys={[currentMenu]}
      subMenuCloseDelay={0.2}
      style={{
        marginTop: '2rem'
      }}
      items={menuItems}
    />
  )
}

export default Menu
