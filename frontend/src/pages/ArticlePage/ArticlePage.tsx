import { Col, Collapse, Row } from 'antd'
import { useParams } from 'react-router-dom'
import Comments from '../../entities/comments/Comments'
import Article from '../../features/article/Article'
import { useGetArticleQuery } from '../../http/api/articles'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { NotFound } from '../../shared/notFound/NotFound'
import { SArticlePage } from './ArticlePage.styled'

export const ArticlePage = () => {
  const { id: articleId = null } = useParams()

  const { data: currentArticle } = useGetArticleQuery(articleId, {
    skip: !articleId,
  })

  if (!currentArticle || !articleId) {
    return <NotFound />
  }

  return (
    <SafeZone>
      <SArticlePage>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Article articleData={currentArticle} />
          </Col>
          <Col span={24}>
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header={'Commentaries'} key={'1'}>
                <Comments articleId={articleId} />
              </Collapse.Panel>
            </Collapse>
          </Col>
        </Row>
      </SArticlePage>
    </SafeZone>
  )
}
