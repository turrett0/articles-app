import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import { FC } from 'react'
import { IArticlesSearchParams } from '../../http/api/articles'

type Props = {
  onSubmit: (formData: IArticlesSearchParams) => void
}

export const ArticlesSearchBar: FC<Props> = ({ onSubmit }) => {
  const onFormClearHandler = () => {
    form.resetFields()
    onSubmit(form.getFieldsValue())
  }

  const [form] = Form.useForm()
  return (
    <Form form={form} onFinish={onSubmit}>
      <Row gutter={[16, 0]}>
        <Col>
          <Form.Item name={'title'}>
            <Input placeholder={'Title'} allowClear />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name={'rangeDate'}>
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col>
          <Button type={'primary'} htmlType="submit">
            Search
          </Button>
          <Button onClick={onFormClearHandler} type={'ghost'}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
