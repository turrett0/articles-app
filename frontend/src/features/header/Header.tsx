import { Button, Col, Row, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreateArticleModal } from '../../entities'

import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'
import { SHeader } from './Header.styled'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const onModalButtonClickHandler = () => setIsModalOpen((prev) => !prev)

  return (
    <SHeader>
      <SafeZone>
        <Row justify={'space-between'} align="middle">
          <Col>
            <Link to={'/'}>
              <Typography.Title level={2}>Articles</Typography.Title>
            </Link>
          </Col>
          <Col>
            <Button onClick={onModalButtonClickHandler}>Add New</Button>
          </Col>
          <CreateArticleModal open={isModalOpen} closeModal={onModalButtonClickHandler} />
        </Row>
      </SafeZone>
    </SHeader>
  )
}
