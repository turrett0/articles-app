import { Row, Select, Col } from 'antd'
import { FC, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IPagination } from '../../http/shared'
import { SPaginationBreadCrumbs, SPaginationItem } from './Pagination.styled'

type Props = IPagination & {
  setPagination: (pagination: IPagination) => void
  total: number
  withSearchParams?: boolean
}

const createVisiblePages = (page: number, pages: number[], maxVisiblePages: number) => {
  const leftStart = page - 1 - Math.round(maxVisiblePages / 2)
  const left = page === 1 ? [1] : pages.slice(leftStart >= 0 ? leftStart : 0, page)
  const right = pages.slice(page, page + Math.round(maxVisiblePages / 2))
  return [...left, ...right]
}

export const Pagination: FC<Props> = ({ page, count, total, setPagination, withSearchParams = false }) => {
  const maxVisiblePages = 6

  const pages = useMemo(() => new Array(Math.ceil(total / count)).fill(null).map((_, i) => i + 1), [count, total])
  const [visiblePages, setVisiblePages] = useState<number[]>(() => createVisiblePages(page, pages, maxVisiblePages))

  const searchParams = useSearchParams()
  const setSearchParams = searchParams[1]

  const onChangePageHandler = (newPage: IPagination['page']) => {
    setPagination({ page: newPage, count })
    if (withSearchParams) {
      setSearchParams({
        page: String(newPage),
        count: String(count),
      })
    }
  }
  const onChangeCountHandler = (newCount: IPagination['count']) => {
    setPagination({ page: newCount >= total ? 1 : page, count: newCount })
    if (withSearchParams) {
      setSearchParams({
        page: String(page),
        count: String(newCount),
      })
    }
  }

  useEffect(() => {
    setVisiblePages(createVisiblePages(page, pages, maxVisiblePages))
  }, [pages, maxVisiblePages, page])

  const steps = useMemo(() => {
    const baseSteps = [2, 10, 50, 100]
    const currentSteps = baseSteps.includes(total) ? baseSteps : [...baseSteps, total]
    return currentSteps.map((step) => ({ value: step, disabled: step > total })).sort((a, b) => a.value - b.value)
  }, [total])

  return (
    <Row gutter={[16, 0]} align={'middle'}>
      {visiblePages[0]! !== 1 && (
        <PaginationBreadcrumbs linkPage={1} reversed onChangePageHandler={onChangePageHandler} />
      )}
      {visiblePages.map((currPage) => (
        <PaginationItem
          key={`__pagination-${currPage}`}
          page={page}
          currPage={currPage}
          onChangePageHandler={onChangePageHandler}
        />
      ))}
      {visiblePages[visiblePages.length - 1] !== pages.length && (
        <PaginationBreadcrumbs linkPage={pages.length} onChangePageHandler={onChangePageHandler} />
      )}

      <Select onChange={onChangeCountHandler} value={count} style={{ width: 100 }} options={steps} />
    </Row>
  )
}

type PaginationItemProps = {
  page: IPagination['page']
  currPage: IPagination['page']
  onChangePageHandler: (newPage: IPagination['page']) => void
}

const PaginationItem: FC<PaginationItemProps> = ({ page, currPage, onChangePageHandler }) => {
  return (
    <Col>
      <SPaginationItem active={currPage === page} onClick={() => onChangePageHandler(currPage)}>
        {currPage}
      </SPaginationItem>
    </Col>
  )
}

type PaginationBreadcrumbsProps = {
  linkPage: number
  reversed?: boolean
  onChangePageHandler: (nevPage: number) => void
}

const PaginationBreadcrumbs: FC<PaginationBreadcrumbsProps> = ({ linkPage, reversed = false, onChangePageHandler }) => {
  return (
    <Col>
      <SPaginationBreadCrumbs onClick={() => onChangePageHandler(linkPage)}>
        {reversed ? '<<' : '>>'}
      </SPaginationBreadCrumbs>
    </Col>
  )
}
