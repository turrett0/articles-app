import { Col, Row, Select, Typography } from 'antd'

import { FC, useMemo } from 'react'
import { IPagination } from '../../http/shared'
import { SPaginationItem } from './Pagination.styled'

type Props = IPagination & {
  setPagination: (pagination: IPagination) => void
  total: number
}

export const Pagination: FC<Props> = ({ page, count, total, setPagination }) => {
  const pages = new Array(Math.ceil(total / count)).fill(null).map((_, i) => i + 1)

  const onChangePageHandler = (newPage: IPagination['page']) => setPagination({ page: newPage, count })
  const onChangeCountHandler = (newCount: IPagination['count']) =>
    setPagination({ page: newCount > total ? 1 : page, count: newCount })

  const steps = useMemo(() => {
    const baseSteps = [2, 10, 50, 100]
    const currentSteps = baseSteps.includes(total) ? baseSteps : [...baseSteps, total]
    return currentSteps.map((step) => ({ value: step, disabled: step > total })).sort((a, b) => a.value - b.value)
  }, [total])

  return (
    <Row gutter={[16, 0]} align={'middle'}>
      {pages.map((currPage) => (
        <Col key={`__pagination-${currPage}`}>
          <SPaginationItem active={currPage === page} onClick={() => onChangePageHandler(currPage)}>
            <Typography.Text>{currPage}</Typography.Text>
          </SPaginationItem>
        </Col>
      ))}
      <Select onChange={onChangeCountHandler} value={count} style={{ width: 100 }} options={steps} />
    </Row>
  )
}
