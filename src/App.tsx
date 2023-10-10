import React from 'react'
import RoutesGeneral from './routes'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

import './App.css'

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <RoutesGeneral />
    </ConfigProvider>
  )
}

export default App
