import { Grid, Row, Col, Pagination } from 'antd'
import { useMemo, useState } from 'react'
import { useGetArticlesQuery } from '../../http/api/articles'
import { IPagination } from '../../http/shared'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { CommonSkeleton } from '../../shared/Skeleton/Skeleton'
import ArticlePreview from '../article-preview/ArticlePreview'

const Articles = () => {
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    count: 10,
  })

  const { data: { data: articles, total } = {}, isLoading } = useGetArticlesQuery(pagination)
  const { lg, md, xxl } = Grid.useBreakpoint()

  const currentColSpan = useMemo(() => {
    if (xxl) {
      return 4
    }

    if (!lg && md) {
      return 12
    }
    if (!md && !lg) {
      return 24
    }

    return 6
  }, [lg, md, xxl])

  return (
    <SafeZone>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <CommonSkeleton span={currentColSpan} length={15} />
        ) : (
          <Col span={24}>
            <Row>
              {articles?.map((article) => (
                <Col span={currentColSpan}>
                  <ArticlePreview key={article.id} articleData={article} />
                </Col>
              ))}
            </Row>
              <Pagination />
          </Col>
        )}
      </Row>
    </SafeZone>
  )
}

export default Articles
