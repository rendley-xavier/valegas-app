import React from 'react'
import { Card as CardComponent, Skeleton } from 'antd'
import { type CardProps } from './CardInterface'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'

const Card: React.FC<CardProps> = ({ loading, title, description }) => {
  return (
    <CardComponent
      style={{
        width: 300,
        boxShadow:
          '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)'
      }}
      actions={[
        <SettingOutlined key='setting' />,
        <EditOutlined key='edit' />,
        <EllipsisOutlined key='ellipsis' />
      ]}
    >
      <Skeleton loading={loading} active>
        <CardComponent.Meta title={title} description={description} />
      </Skeleton>
    </CardComponent>
  )
}

export default Card
