import { FC } from 'react'

//antd
import { Modal } from 'antd'

//features
import { CreateArticle } from '../../features/createArticle'

//layout
import { SafeZone } from '../../layouts/safeZone/SafeZoneLayout'

//hooks
import { useCreateArticleMutation } from '../../http/api/articles'
import { ICreateArticleFormData } from '../../http/api/articles/models'

type Props = {
  open: boolean
  closeModal: () => void
}

export const CreateArticleModal: FC<Props> = ({ open, closeModal }) => {
  const [createPost, { isLoading }] = useCreateArticleMutation()

  const onFormFinishHandler = (formData: ICreateArticleFormData) => {
    createPost(formData)
    closeModal()
  }

  return (
    <Modal open={open} okText={'Submit'} footer={null} onCancel={closeModal} destroyOnClose>
      <SafeZone>
        <CreateArticle onSubmit={onFormFinishHandler} isSubmitting={isLoading} />
      </SafeZone>
    </Modal>
  )
}
