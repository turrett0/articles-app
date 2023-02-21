import { Card, Row, Typography } from 'antd'
import { FC } from 'react'
import { IComment } from '../../http/api/comments'
import { SComment } from './Comment.styled'

type Props = {
  commentData: IComment
}

export const Comment: FC<Props> = ({ commentData }) => {
  console.log(commentData)
  return (
    <SComment>
      <Card>
        <Typography.Text>{commentData.text}</Typography.Text>
      </Card>
    </SComment>
  )
}
