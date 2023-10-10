import React from 'react'
import {
  MenuUnfoldOutlined,
  DownOutlined,
  UnlockOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'
import { Button, Dropdown, Row } from 'antd'
import SpsLogo from '../../assets/images/sps_nova.png'
import { type MenuProps } from 'antd/lib'
import { type NavBarProps } from './NavBarInterfaces'

const NavBar: React.FC<NavBarProps> = ({ onToggleSidebar }) => {
  const userName = 'Rendley Arnou'
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Button
          style={{ textAlign: 'start', fontSize: '1rem', background: 'none' }}
          block
          type='text'
          onClick={() => {}}
        >
          <UnlockOutlined /> alterar senha
        </Button>
      )
    },
    {
      key: '1',
      label: (
        <Button
          style={{ textAlign: 'start', fontSize: '1rem', background: 'none' }}
          block
          type='text'
          danger
        >
          <LogoutOutlined />
          sair
        </Button>
      )
    }
  ]
  return (
    <Header
      style={{
        padding: 0,
        height: '5rem',
        backgroundColor: 'var(--main-bg-color)',
        borderBottom: '.2rem solid #0c7841',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <MenuUnfoldOutlined className='trigger' onClick={onToggleSidebar} />
      <Row justify='space-between' align='middle' style={{ width: '100%' }}>
        <Row>
          <a
            href={`${process.env.PUBLIC_URL}`}
            style={{ marginLeft: '3rem', display: 'flex', gap: '4px' }}
          >
            <img
              src={SpsLogo}
              alt='Secretaria da Proteção Social(SPS)'
              style={{
                width: '100%',
                maxWidth: '300px'
              }}
            />
          </a>
        </Row>
        <Dropdown
          placement='bottomRight'
          trigger={['hover', 'click']}
          overlayStyle={{
            background: 'none'
          }}
          menu={{ items }}
        >
          <Button
            style={{
              height: '100%',
              fontSize: '14px',
              border: 'none',
              background: 'none',
              position: 'absolute',
              right: '2rem',
              marginTop: 12
            }}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <UserOutlined style={{ fontSize: '1rem', color: '#65ba8f' }} />
            Olá,<strong> {userName}</strong> <DownOutlined />
          </Button>
        </Dropdown>
      </Row>
    </Header>
  )
}

export default NavBar
