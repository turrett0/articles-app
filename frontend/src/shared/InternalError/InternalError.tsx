import { Row } from 'antd'
import { FC } from 'react'

type Props = {
  text?: string
}

export const InternalError: FC<Props> = ({ text }) => {
  return <Row>{text || 'Internal Error'}</Row>
}
