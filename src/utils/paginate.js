import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
  // нужно вычислить начальный индекс элемента на этой странице

  const startIndex = (pageNumber - 1) * pageSize
  // перейти к начальному индексу и забрать все элементы
  // _.slice(items, startIndex) // отрежет наш массив начиная со startIndex
  // _.take(_.slice(items, startIndex),pageSize)
  return _(items).slice(startIndex).take(pageSize).value()
}
