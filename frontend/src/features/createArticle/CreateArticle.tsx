import { Button, Col, Form, Input, Row } from 'antd'
import { FC } from 'react'
import { ICreateArticleFormData } from '../../http/api/articles/models'
import { SCreateArticle } from './CreateArticle.styled'

type Props = {
  onSubmit: (formData: ICreateArticleFormData) => void
  isSubmitting?: boolean
}

const defaultValidationMessage = 'Please fill this field'

export const CreateArticle: FC<Props> = ({ onSubmit, isSubmitting }) => {
  const [form] = Form.useForm()

  return (
    <SCreateArticle>
      <Form labelCol={{ span: 24 }} form={form} onFinish={onSubmit}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: defaultValidationMessage }]}>
          <Input placeholder="Here is an article" />
        </Form.Item>
        <Form.Item label="Content" name="text" rules={[{ required: true, message: defaultValidationMessage }]}>
          <Input.TextArea placeholder="Lorem..." />
        </Form.Item>
        <Row justify={'end'} align="middle">
          <Col>
            <Button htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </SCreateArticle>
  )
}
