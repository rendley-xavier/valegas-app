import React from 'react'
import Sider from 'antd/es/layout/Sider'
import { ReactComponent as BrasaoCearaIcon } from '../../assets/icons/brasao_ceara.svg'
import Menu from '../Menu'
import { type SideBarProps } from './SideBarInterfaces'

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  return (
    <Sider
      collapsed={collapsed}
      breakpoint='lg'
      className='edit-sider'
      style={{
        backgroundColor: 'var(--main-bg-color)',
        boxShadow: '5px 0 13px 3px rgb(10 10 10 / 10%)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          justifyContent: 'center',
          height: '5rem'
        }}
      >
        <a style={{ display: 'flex', gap: '4px' }}>
          {!collapsed && (
            <BrasaoCearaIcon
              style={{
                width: '100%',
                maxWidth: !collapsed ? '3.5rem' : '50px',
                maxHeight: '5rem',
                padding: '2px'
              }}
            />
          )}
        </a>
        {/* <img
            src={logoMaisNutricao}
            alt='Logo Programa Mais Nutrição'
            style={{ borderRadius: '10%' }}
          /> */}
      </div>
      <Menu />
    </Sider>
  )
}

export default SideBar
