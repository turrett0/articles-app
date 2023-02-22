import { Grid, Row, Col } from 'antd'
import { useLayoutEffect, useMemo, useState } from 'react'
import { IArticlesSearchParams, TGetArticlesRequestParams, useGetArticlesQuery } from '../../http/api/articles'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { EmptyFallback } from '../../shared/emptyFallback/EmptyFallback'
import { Pagination } from '../../shared/pagination/Pagination'
import { CommonSkeleton } from '../../shared/Skeleton/Skeleton'
import ArticlePreview from '../../features/article-preview/ArticlePreview'
import { ArticlesSearchBar } from '../../features/articlesSearchBar/ArticleSearchBar'

const Articles = () => {
  const [pagination, setPagination] = useState<TGetArticlesRequestParams>({
    page: 1,
    count: 10,
  })

  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const page = params.get('page')
    const count = params.get('count')
    if (page || count) {
      setPagination((prev) => ({
        ...prev,
        page: page ? +page : prev.page,
        count: count ? +count : prev.count,
      }))
    }
  }, [])

  const onSearchSubmitHandler = (formData: IArticlesSearchParams) => {
    setPagination((prev) => ({
      ...prev,
      ...formData,
    }))
  }

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
      <Row justify={'center'}>
        <ArticlesSearchBar onSubmit={onSearchSubmitHandler} />
      </Row>
      {isLoading ? (
        <CommonSkeleton span={currentColSpan} length={pagination.count} />
      ) : (
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              {articles?.length ? (
                articles.map((article) => (
                  <Col key={article.id} span={currentColSpan} style={{ minWidth: 300 }}>
                    <ArticlePreview key={article.id} articleData={article} />
                  </Col>
                ))
              ) : (
                <Row justify={'center'}>
                  <EmptyFallback title={'There is no Articles yet.'} />
                </Row>
              )}
            </Row>
          </Col>
          {total ? (
            <Col span={24}>
              <Row justify={'end'}>
                <Pagination
                  page={pagination.page}
                  count={pagination.count}
                  total={total}
                  setPagination={setPagination}
                  withSearchParams
                />
              </Row>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      )}
    </SafeZone>
  )
}

export default Articles
