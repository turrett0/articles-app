import { Card, Row, Typography } from 'antd'
import { FC } from 'react'

type Props = {
  text?: string
}

export const NotFound: FC<Props> = ({ text }) => {
  return (
    <Row justify={'center'} align={'middle'}>
      <Card style={{ width: 400 }}>
        <Row justify={'center'} align={'middle'}>
          <Typography.Text strong>{text || 'Nothing was found!'}</Typography.Text>
        </Row>
      </Card>
    </Row>
  )
}
