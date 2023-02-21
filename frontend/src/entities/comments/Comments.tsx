import { Col, Row } from 'antd'
import { FC, useState } from 'react'
import { Comment } from '../../features/comment/Comment'
import { IArticle } from '../../http/api/articles/models'
import { useGetCommentsQuery } from '../../http/api/comments'
import { IPagination } from '../../http/shared'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { EmptyFallback } from '../../shared/emptyFallback/EmptyFallback'
import { Pagination } from '../../shared/pagination/Pagination'
import { CommonSkeleton } from '../../shared/Skeleton/Skeleton'
import { SComments } from './Comments.styled'

type Props = {
  articleId: IArticle['id']
}

const Comments: FC<Props> = ({ articleId }) => {
  const [pagination, setPagination] = useState<IPagination>({
    count: 2,
    page: 1,
  })
  const { data: { data: comments, total } = {}, isLoading } = useGetCommentsQuery({ ...pagination, article: articleId })

  if (!comments) {
    return <>placeholder 404</>
  }

  return (
    <SComments>
      <SafeZone>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            {isLoading ? (
              <CommonSkeleton span={24} />
            ) : (
              <Row gutter={[0, 16]} justify={'center'}>
                {comments?.length ? (
                  comments.map((comment) => (
                    <Col key={`__comment-${comment.id}`} span={24}>
                      <Comment commentData={comment} />
                    </Col>
                  ))
                ) : (
                  <EmptyFallback title={'There is no Comments yet.'} />
                )}
              </Row>
            )}
          </Col>
          {total ? (
            <Col span={24}>
              <Row justify={'end'}>
                <Col>
                  <Pagination
                    page={pagination.page}
                    count={pagination.count}
                    total={total}
                    setPagination={setPagination}
                  />
                </Col>
              </Row>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </SafeZone>
    </SComments>
  )
}

export default Comments
