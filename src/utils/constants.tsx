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
import { createMenuItem, getMenuItem } from './helper'
import { type MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'

export const menuItems: MenuProps['items'] = [
  getMenuItem(
    <NavLink to={'/'}>INÍCIO</NavLink>,
    'inicio',
    <HomeOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/estatisticas'}>ESTATÍSTICAS</NavLink>,
    'estatistica',
    <BarChartOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'ACESSOS',
    'acessos',
    <UserSwitchOutlined style={{ fontSize: '1rem' }} />,
    [
      createMenuItem('REPRESENTANTES', '/acessos/representantes'),
      createMenuItem('GRUPOS', '/acessos/grupos')
    ]
  ),
  getMenuItem(
    <NavLink to={'/instituicoes'}>INSTITUIÇÕES</NavLink>,
    'instituicoes',
    <BankOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'BENEFICIÁRIOS',
    'beneficiarios',
    <TeamOutlined style={{ fontSize: '1rem' }} />,
    [
      createMenuItem('EM GERAL', '/beneficiarios/em-geral'),
      createMenuItem('POR STATUS', '/beneficiarios/por-status')
    ]
  ),
  getMenuItem(
    <NavLink to={'/dashboard'}>PAINEL VISUAL</NavLink>,
    'painel-visual',
    <BarChartOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/prestacao-de-contas'}>PRESTAÇÃO DE CONTAS</NavLink>,
    'prestacao-de-contas',
    <FileDoneOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/edicoes'}>EDIÇÕES</NavLink>,
    'edicoes',
    <EditOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    'GERENCIAMENTO',
    'gerenciamento',
    <ToolOutlined style={{ fontSize: '1rem' }} />,
    [createMenuItem('CADASTROS BÁSICOS', '/cadastros-basicos')]
  ),
  getMenuItem(
    <NavLink to={'/alterar-senha'}>ALTERAR SENHA</NavLink>,
    'alterar-senha',
    <UnlockOutlined style={{ fontSize: '1rem' }} />
  ),
  getMenuItem(
    <NavLink to={'/login'}>SAIR</NavLink>,
    'sair',
    <LogoutOutlined style={{ fontSize: '1rem' }} />
  )
]
