import React, {useMemo} from 'react'
import ProgressBar from '../components/ProgressBar'
import {useSelector} from 'react-redux'
import {getCategory} from '../store/categories/selectors'

export default function ProgressBarContainer() {
  const {category} = useSelector((state) => getCategory(state))
  const filterCategory = category.filter((item) => item.checked)
  const memoizedCompletedCategory = useMemo(() => {
    return ((100 * filterCategory.length) / category.length) | 0
  }, [filterCategory.length, category.length])
  return <ProgressBar completedCategory={memoizedCompletedCategory} />
}
