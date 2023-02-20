import { Button, Card, Col, Row, Typography } from 'antd'
import { FC } from 'react'

import { useParams } from 'react-router-dom'
import { Arrow } from '../../assets/icons'
import { useGetArticleQuery } from '../../http/api/articles'
import { IArticle } from '../../http/api/articles/models'
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import GoBack from '../../shared/GoBack/GoBack'
import { toDate } from '../../tools/date'

const Article = () => {
  const { id = null } = useParams()

  const { data } = useGetArticleQuery(id, {
    skip: !id,
  })

  if (!data) {
    return <>error placeholder</>
  }
  const { title, date, text } = data

  return (
    <SafeZone>
      <Card title={<ArticleTitle data={{ title, date }} />}>
        <Typography.Text>{text}</Typography.Text>
      </Card>
    </SafeZone>
  )
}

type TitleProps = {
  data: Pick<IArticle, 'date' | 'title'>
}

const ArticleTitle: FC<TitleProps> = ({ data }) => {
  const { title, date } = data
  return (
    <Row align={'middle'} justify={'space-between'}>
      <Col>
        <Row align={'middle'} justify="space-between" gutter={[8, 0]}>
          <Col>
            <GoBack />
          </Col>
          <Col>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {title}
            </Typography.Title>
          </Col>
        </Row>
      </Col>
      <Col>
        <Typography.Text>{toDate(date)}</Typography.Text>
      </Col>
    </Row>
  )
}

export default Article
