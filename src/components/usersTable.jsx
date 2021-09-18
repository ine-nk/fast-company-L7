import React from 'react'
import PropTypes from 'prop-types'
// import User from './user'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import BookMark from './bookmark'

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    professions: { path: 'profession.name', name: 'Профессия' },
    qualities: { name: 'Качества' },
    completedMeetings: { path: 'completedMeetings', name: 'кол-во встреч' },
    rate: { path: 'rate', name: 'рейтинг' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (<BookMark
        status={ user.bookmark }
        onClick={ () => onToggleBookMark(user._id) }
      // id={ _id }
      />)
    },
    delete: {
      component: (user) => (
        <button onClick={ () => onDelete(user._id) }
          className="btn btn-danger btn-sm">
          Удалить
        </button>
      )
    }
  }

  // отсюда заголовки перенесли в TableHeader

  // const rows = users.map((user) => (
  // <User
  //   key={ user._id }
  //   { ...rest }
  //   { ...user }

  // />
  // ))

  return (
    <table className='table'>
      {/* <TableHeader
        onSort={ onSort }
        selectedSort={ selectedSort }
        columns={ columns }
      /> */}
      <TableHeader { ...{ onSort, selectedSort, columns } } />
      <TableBody { ...{ columns, data: users } } />
      {/* <tbody>{ rows }</tbody> */ }
    </table>)
}
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UserTable
