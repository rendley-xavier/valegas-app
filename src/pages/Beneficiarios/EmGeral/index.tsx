import React from 'react'
import Table from '../../../components/Table'
import { type TableProps } from 'antd'

interface RecordType {
  id: number
  firstName: string
  lastName: string
  age: number
  address1: string
  address2: string
  address3: string
}

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120
  }
]

const getData = (count: number): RecordType[] => {
  const data: RecordType[] = new Array(count).fill(null).map((_, index) => ({
    id: index,
    firstName: `First_${index.toString(16)}`,
    lastName: `Last_${index.toString(16)}`,
    age: 25 + (index % 10),
    address1: `New York No. ${index} Lake Park`,
    address2: `London No. ${index} Lake Park`,
    address3: `Sydney No. ${index} Lake Park`
  }))

  return data
}

const BeneficiariosEmGeral: React.FC = () => {
  const loading = false
  const [count] = React.useState(10000)
  const data = React.useMemo(() => getData(count), [count])

  return (
    <div id='sectionMain'>
      <div className='container-section'>
        <h2>PÁGINA DE LISTAGEM DE BENEFICIÁRIOS EM GERAL</h2>
        <Table loading={loading} columns={columns} data={data} rowKey='id' />
      </div>
    </div>
  )
}

export default BeneficiariosEmGeral
