import React from 'react'
import {
  HomeOutlined,
  BarChartOutlined,
  UserSwitchOutlined,
  BankOutlined,
  TeamOutlined,
  FileDoneOutlined,
  EditOutlined,
  ToolOutlined,
  UnlockOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { getMenuItem } from './helper'
import { type MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

export const menuItems: MenuProps['items'] = [
  getMenuItem(
    <NavLink to={'/'}>INÍCIO</NavLink>,
    'Inicio',
    <HomeOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/estatisticas'}>ESTATÍSTICAS</NavLink>,
    'Estatísticas',
    <BarChartOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'ACESSOS',
    'Acessos',
    <UserSwitchOutlined style={{ fontSize: '1rem' }} />,
    [
      getMenuItem(
        <NavLink to={'/acessos/representantes'}>REPRESENTANTES</NavLink>,
        'Representantes'
      ),
      getMenuItem(<NavLink to={'/acessos/grupos'}>GRUPOS</NavLink>, 'Grupos')
    ]
  ),
  getMenuItem(
    <NavLink to={'/instituicoes'}>INSTITUIÇÕES</NavLink>,
    'Instituições',
    <BankOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'BENEFICIÁRIOS',
    'Beneficiários',
    <TeamOutlined style={{ fontSize: '1rem' }} />,
    [
      getMenuItem(
        <NavLink to={'/beneficiarios/em-geral'}>EM GERAL</NavLink>,
        'Em geral'
      ),
      getMenuItem(
        <NavLink to={'/beneficiarios/por-status'}>POR STATUS</NavLink>,
        'Por status'
      )
    ]
  ),
  getMenuItem(
    <NavLink to={'/dashboard'}>PAINEL VISUAL</NavLink>,
    'Painel visual',
    <BarChartOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/prestacao-de-contas'}>PRESTAÇÃO DE CONTAS</NavLink>,
    'Prestação de contas',
    <FileDoneOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/edicoes'}>EDIÇÕES</NavLink>,
    'Edições',
    <EditOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'GERENCIAMENTO',
    'Gerenciamento',
    <ToolOutlined style={{ fontSize: '1rem' }} />,
    [
      getMenuItem('CADASTROS BÁSICOS', 'Cadastros básicos', null, [
        getMenuItem(
          <NavLink to={'/cadastros-basicos'}>CADASTROS BÁSICOS</NavLink>,
          'Justificativas'
        )
      ])
    ]
  ),
  getMenuItem(
    <NavLink to={'/alterar-senha'}>ALTERAR SENHA</NavLink>,
    'Alterar senha',
    <UnlockOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/login'}>SAIR</NavLink>,
    'Sair',
    <LogoutOutlined style={{ fontSize: '1rem' }} />
  )
]
