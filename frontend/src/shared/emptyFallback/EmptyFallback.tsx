import { Row, Col, Card, Typography } from 'antd'
import { FC } from 'react'

type Props = {
  title: string
}

export const EmptyFallback: FC<Props> = ({ title }) => {
  return (
    <Row justify={'center'}>
      <Col>
        <Card>
          <Typography.Title>{title}</Typography.Title>
        </Card>
      </Col>
    </Row>
  )
}
