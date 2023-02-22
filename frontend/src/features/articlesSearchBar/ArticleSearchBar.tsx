import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import { FC } from 'react'
import { IArticlesSearchParams } from '../../http/api/articles'

type Props = {
  onSubmit: (formData: IArticlesSearchParams) => void
}

export const ArticlesSearchBar: FC<Props> = ({ onSubmit }) => {
  const onFormClearHandler = () => {
    form.resetFields()
    onSubmit({
      title: null,
      endDate: null,
      startDate: null,
    })
  }

  const [form] = Form.useForm()

  const onSubmitFormHandler = () => {
    const formData: { [key: string]: any } = form.getFieldsValue()
    const values: IArticlesSearchParams = {}
    if (formData.rangeDate) {
      values.startDate = JSON.stringify(formData.rangeDate[0].format('YYYY-MM-DD'))
      values.endDate = JSON.stringify(formData.rangeDate[1].format('YYYY-MM-DD'))
    }
    values.title = formData.title

    onSubmit(values)
  }

  return (
    <Form form={form} onFinish={onSubmitFormHandler}>
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
