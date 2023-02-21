import { Row } from 'antd'
import React, { FC, ReactNode } from 'react'

type Props = {
  lenght: number
  perPage: number
}

export const WithPagination: FC<Props> = ({}) => {
  return <Row>Pagination</Row>
}
