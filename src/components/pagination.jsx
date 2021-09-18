import React from 'react'
import _ from 'lodash'
import { PropTypes } from 'prop-types'

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  // [1,2,3, ... n]
  // const { itemsCount, pageSize } = props
  // console.log('currentPage = ', { currentPage })
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)

  if (pageCount === 1) return null

  return (
    <nav>
      <ul className="pagination">
        { pages.map((page) => (
          <li
            key={ page }
            className={ 'page-item ' + (page === currentPage ? 'active' : '') }
          >
            <a className="page-link" onClick={ () => onPageChange(page) }>
              { page }
            </a>
          </li>
        )) }
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
// TODO сделать кнопки вперед и назад
