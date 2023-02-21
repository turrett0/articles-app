import { Col, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { FC } from 'react'

type SkeletonProps = {
  span: number
  length?: number
}

export const CommonSkeleton: FC<SkeletonProps> = ({ span, length }) => {
  const SkeletonComponent = () => (
    <Col span={span}>
      <Card style={{ width: '100%', marginTop: 16 }} loading={true}>
        <Meta />
      </Card>
    </Col>
  )

  if (!length) {
    return <SkeletonComponent />
  }

  return (
    <>
      {new Array(length).fill(null).map((item) => (
        <SkeletonComponent />
      ))}
    </>
  )
}
