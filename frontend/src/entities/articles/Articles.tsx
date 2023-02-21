import { Grid, Row, Col } from 'antd'
import { useMemo, useState } from 'react'
import { useGetArticlesQuery } from '../../http/api/articles'
import { IPagination } from '../../http/shared'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { Pagination } from '../../shared/pagination/Pagination'
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

  if (!articles || !total) {
    return <></>
  }

  return (
    <SafeZone>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <CommonSkeleton span={currentColSpan} length={pagination.count} />
        ) : (
          <Col span={24}>
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <Row gutter={[16, 0]}>
                  {articles?.map((article) => (
                    <Col span={currentColSpan} style={{ minWidth: 300 }}>
                      <ArticlePreview key={article.id} articleData={article} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Pagination
                    page={pagination.page}
                    count={pagination.count}
                    total={total}
                    setPagination={setPagination}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </SafeZone>
  )
}

export default Articles
