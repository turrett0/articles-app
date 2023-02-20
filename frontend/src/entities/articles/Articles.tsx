import { Avatar, Card, Col, Grid, Row, Skeleton, Spin } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { FC, useMemo } from 'react'
import { useGetArticlesQuery } from '../../http/api/articles'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import ArticlePreview from '../article-preview/ArticlePreview'

const Articles = () => {
  const { data: articles, isLoading } = useGetArticlesQuery()
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
          <ArticlesSkeleton span={currentColSpan} />
        ) : (
          articles?.map((article) => (
            <Col span={currentColSpan}>
              <ArticlePreview key={article.id} articleData={article} />
            </Col>
          ))
        )}
      </Row>
    </SafeZone>
  )
}

type SkeletonProps = {
  span: number
  length?: number
}

const ArticlesSkeleton: FC<SkeletonProps> = ({ span, length = 15 }) => {
  return (
    <>
      {new Array(length).fill(null).map((item) => (
        <Col span={span}>
          <Card style={{ width: 300, marginTop: 16 }} loading={true}>
            <Meta />
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Articles
