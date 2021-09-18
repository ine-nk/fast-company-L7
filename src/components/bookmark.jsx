import React from 'react'
import { PropTypes } from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  // console.log('satus', status)

  // console.log('id', id, typeof (id))

  // status = true
  let classPart = 'bi bi-bookmark'
  classPart = status ? classPart + '-fill' : classPart

  return (
    <div className="text-al-center">
      <button { ...rest }>
        <i className={ classPart }></i>
      </button>
    </div>
  )
}
BookMark.propTypes = {
  status: PropTypes.bool
  // onToggleBookMark: PropTypes.func.isRequired,
  // id: PropTypes.string.isRequired
}
export default BookMark
