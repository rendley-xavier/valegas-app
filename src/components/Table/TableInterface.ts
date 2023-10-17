import { type SizeType } from 'antd/es/config-provider/SizeContext'

export interface TableProps {
  loading: boolean
  columns: object[]
  data: object[]
  rowKey: string
  size?: SizeType
  onChange?: () => void
  bordered?: boolean
}
