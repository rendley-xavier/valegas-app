import React, { useCallback, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Container from '../components/Container'
import Inicio from '../pages/Inicio'
import Edicao from '../pages/Edicoes'
import Estatisticas from '../pages/Estatisticas'
import Representantes from '../pages/Acessos/Representantes'
import Grupos from '../pages/Acessos/Grupos'
import Instituicoes from '../pages/Instituicoes'
import BeneficiariosEmGeral from '../pages/Beneficiarios/EmGeral'
import BeneficiariosPorStatus from '../pages/Beneficiarios/PorStatus'
import Dashboard from '../pages/Dashboard'
import PrestacaoDeContas from '../pages/PrestacaoDeContas'
import Gerenciamento from '../pages/Gerenciamento'
import AlterarSenha from '../pages/AlterarSenha'
import Login from '../pages/Login'

const RoutesGeneral: React.FC = () => {
  const [openNovaSenha, setOpenNovaSenha] = useState(false)

  const handleCloseNovaSenha = useCallback(() => {
    setOpenNovaSenha(false)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Container>
              <Outlet />
            </Container>
          }
        >
          <Route path='/' element={<Inicio />} />
          <Route path='/edicoes' element={<Edicao />} />
          <Route path='/estatisticas' element={<Estatisticas />} />
          <Route path='/acessos/representantes' element={<Representantes />} />
          <Route path='/acessos/grupos' element={<Grupos />} />
          <Route path='/instituicoes' element={<Instituicoes />} />
          <Route
            path='/beneficiarios/em-geral'
            element={<BeneficiariosEmGeral />}
          />
          <Route
            path='/beneficiarios/por-status'
            element={<BeneficiariosPorStatus />}
          />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/prestacao-de-contas' element={<PrestacaoDeContas />} />
          <Route path='/cadastros-basicos' element={<Gerenciamento />} />
          <Route
            path='/alterar-senha'
            element={
              <AlterarSenha
                onClose={handleCloseNovaSenha}
                visible={openNovaSenha}
              />
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesGeneral
