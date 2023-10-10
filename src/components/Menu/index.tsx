import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu as AntMenu } from 'antd'
import { menuItems } from '../../utils/constants'

import './styles.css'

const urlToMenuMap = {
  '/': 'inicio',
  estatisticas: 'estatisticas',
  acessos: 'acessos',
  instituicoes: 'instituicoes',
  beneficiarios: 'beneficiarios',
  dashboard: 'dashboard',
  'prestacao-de-contas': 'prestacao-de-contas',
  edicoes: 'edicoes',
  gerenciamento: 'gerenciamento',
  'alterar-senha': 'alterar-senha',
  sair: 'sair'
}

function getCurrentMenuFromUrl(url: string): string {
  const cleanedUrl = url.replace(/^\/|\/$/g, '')

  switch (cleanedUrl) {
    case '':
      return urlToMenuMap['/']
    case 'estatisticas':
    case 'acessos':
    case 'instituicoes':
    case 'beneficiarios':
    case 'dashboard':
    case 'prestacao-de-contas':
    case 'edicoes':
    case 'gerenciamento':
    case 'alterar-senha':
    case 'sair':
      return urlToMenuMap[cleanedUrl]
    default:
      return ''
  }
}

const Menu: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const currentMenu = getCurrentMenuFromUrl(pathname)
    setCurrentMenu(currentMenu)
  }, [pathname])

  return (
    <AntMenu
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
