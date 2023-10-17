import React from 'react'
import { Table as GenericTable } from 'antd'
import { type TableProps } from './TableInterface'

const Table: React.FC<TableProps> = ({
  loading,
  columns,
  data,
  rowKey,
  size,
  onChange,
  bordered
}) => {
  return (
    <GenericTable
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      size={size}
      onChange={onChange}
      bordered={bordered}
    />
  )
}

export default Table
