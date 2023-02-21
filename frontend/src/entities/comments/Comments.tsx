import { Card, Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { Comment } from '../../features/comment/Comment'
import { IArticle } from '../../http/api/articles/models'
import { useGetCommentsQuery } from '../../http/api/comments'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { CommonSkeleton } from '../../shared/Skeleton/Skeleton'
import { SComments } from './Comments.styled'

type Props = {
  articleId: IArticle['id']
}

const Comments: FC<Props> = ({ articleId }) => {
  const { data: comments, isLoading } = useGetCommentsQuery(articleId)

  if (!comments) {
    return <>placeholder 500</>
  }

  return (
    <SComments>
      <SafeZone>
        <Card>
          <Row>
            <Typography.Title level={4}>Commetaries</Typography.Title>
          </Row>
          <Row gutter={[0, 16]}>
            {isLoading ? (
              <CommonSkeleton span={24} />
            ) : (
              comments.map((comment) => (
                <Col span={24}>
                  <Comment commentData={comment} />
                </Col>
              ))
            )}
          </Row>
        </Card>
      </SafeZone>
    </SComments>
  )
}

export default Comments
