import React from 'react'
import { type MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number]

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label
  }
}

export const createMenuItem = (
  label: string,
  to: string,
  icon: React.ReactNode | null = null
): MenuItem => {
  return getMenuItem(<NavLink to={to}>{label}</NavLink>, to, icon)
}
