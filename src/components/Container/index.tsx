import React, { useState } from 'react'
import { Layout } from 'antd'
import { type ContainerProps } from './ContainerInterfaces'

import SideBar from '../SideBar'
import NavBar from '../NavBar'
import './styles.css'

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = (): void => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout style={{ backgroundColor: '#dcdcdc', overflow: 'auto' }}>
        <NavBar onToggleSidebar={toggleSidebar} />
        <div id='content'>{children}</div>
      </Layout>
    </Layout>
  )
}

export default Container
