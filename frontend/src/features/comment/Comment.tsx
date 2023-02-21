import { Card, Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { IComment } from '../../http/api/comments'
import { SComment } from './Comment.styled'

type Props = {
  commentData: IComment
}

export const Comment: FC<Props> = ({ commentData }) => {
  return (
    <SComment>
      <Card>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Typography.Text strong>{commentData.user}</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text>{commentData.text}</Typography.Text>
          </Col>
        </Row>
      </Card>
    </SComment>
  )
}
