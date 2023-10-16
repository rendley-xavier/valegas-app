import React from 'react'
import Pagination from '../../components/Pagination'

const Inicio: React.FC = () => {
  return (
    <div id='sectionMain'>
      <div className='container-section'>
        <h2>PÁGINA INICIAL</h2>
        <Pagination paginationList={785} typeItems='beneficiários' />
      </div>
    </div>
  )
}

export default Inicio
