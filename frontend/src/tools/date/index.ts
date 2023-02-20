import moment from 'moment'

export const toDate = (date: string): string => {
  if (moment(date).isValid()) {
    return moment(date).format('lll')
  }
  return ''
}
