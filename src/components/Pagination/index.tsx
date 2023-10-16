import React from 'react'
import { Pagination as PaginationComponent } from 'antd'
import { type PaginationProps } from './PaginationInterface'

const Pagination: React.FC<PaginationProps> = ({
  paginationList,
  typeItems
}) => (
  <PaginationComponent
    total={paginationList}
    showSizeChanger
    showTotal={(total) => (
      <strong>
        Total de {total} {typeItems}
      </strong>
    )}
  />
)

export default Pagination
