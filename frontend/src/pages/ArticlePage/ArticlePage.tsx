import { Collapse } from 'antd'
import { useParams } from 'react-router-dom'
import Comments from '../../entities/comments/Comments'
import Article from '../../features/article/Article'
import { useGetArticleQuery } from '../../http/api/articles'
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
    <SArticlePage>
      <Article articleData={currentArticle} />
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel header={'Commentaries'} key={'1'}>
          <Comments articleId={articleId} />
        </Collapse.Panel>
      </Collapse>
    </SArticlePage>
  )
}
