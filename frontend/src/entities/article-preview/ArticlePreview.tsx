import { Card, Row, Typography } from 'antd'

import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IArticlePreview } from '../../http/api/articles/models'
import { toDate } from '../../tools/date'
import { SArticlePreview, SArticlePreviewInner } from './ArticlePreview.styled'

type Props = {
  articleData: IArticlePreview
}

const ArticlePreview: FC<Props> = ({ articleData }) => {
  const { id, title, date } = articleData
  return (
    <Link to={`/article/${id}`} state={{ from: '/' }}>
      <SArticlePreview>
        <Card hoverable style={{ height: 150 }} bodyStyle={{ padding: 8, height: '100%' }}>
          <SArticlePreviewInner>
            <Typography.Paragraph ellipsis={{ rows: 2, symbol: '...' }}>
              <Typography.Text strong underline>
                {title}
              </Typography.Text>
            </Typography.Paragraph>
            <Row justify={'end'}>
              <Typography.Text>{toDate(date)}</Typography.Text>
            </Row>
          </SArticlePreviewInner>
        </Card>
      </SArticlePreview>
    </Link>
  )
}

export default ArticlePreview
