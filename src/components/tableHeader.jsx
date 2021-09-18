// для создания переиспользуемого компонента  таблицы с произвольными столбцами
import React from 'react'
import PropTypes from 'prop-types'
// import UserTable from './usersTable'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  // currentSort заменен на selectedSort
  // columns = названия колонок

  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({ ...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc' })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  const renderSortArrow = (selectedSort) => {
    // console.log('renderSortArrow >>>>>>>>>>>>>>>>>>')
    return (<>
      {
        selectedSort.order === 'asc' && (<i className='bi bi-caret-down-fill'></i>)
      }
      {
        selectedSort.order === 'desc' && (<i className='bi bi-caret-up-fill'></i>)
      }
    </>)
  }

  return (
    <thead>
      <tr>
        { Object.keys(columns).map((column) => (
          <th
            key={ column }
            onClick={ columns[column].path ? () => handleSort(columns[column].path) : undefined }
            { ...{ role: columns[column].path && 'button' } }
            scope="col">
            { columns[column].name }
            { columns[column].path &&
              columns[column].path === selectedSort.path && (
                renderSortArrow(selectedSort)
              )}
          </th>
        )) }
      </tr>
    </thead >
  )
}
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableHeader
