import type React from 'react'
import { type MenuProps } from 'antd'
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
