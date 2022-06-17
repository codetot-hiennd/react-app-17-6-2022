import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getData } from '../../../ultils/serverApi'
import { POSTS } from '../../../models/typeData'
import {
  changeCurrentPage,
  changeLimit
} from '../../../redux/slices/pagination'
import { useEffect } from 'react'

const limits = [10, 20, 30]

export const Posts = () => {
  const { pagination } = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log('paginate', pagination)

  const { data, isLoading } = useQuery(['get_post', pagination], async () => {
    const start = pagination.currentPage * pagination.limit - pagination.limit

    const { data, success } = await getData(POSTS, start, pagination.limit)
    if (success && data) {
      return data
    }
  })

  useEffect(() => {
    dispatch(changeCurrentPage(1))
  }, [pagination.limit])

  console.log(data)

  return (
    <div>
      Post
      <div>{isLoading ? 'Loading...........' : ''}</div>
      <div>
        {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
        {data && !data.length && <h1>No data</h1>}
      </div>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() =>
            dispatch(changeCurrentPage(pagination.currentPage - 1))
          }
          disabled={pagination.currentPage <= 1 || isLoading}
        >
          Prev
        </button>
        <div>Page {pagination.currentPage}</div>
        <button
          onClick={() =>
            dispatch(changeCurrentPage(pagination.currentPage + 1))
          }
          disabled={!data?.length || isLoading}
        >
          Next
        </button>

        <select
          value={pagination.limit}
          onChange={(event) =>
            dispatch(changeLimit(Number(event.target.value)))
          }
        >
          {limits.map((limit) => (
            <option key={limit} value={limit}>
              {limit} / page
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
