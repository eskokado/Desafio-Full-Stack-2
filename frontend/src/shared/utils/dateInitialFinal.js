import moment from 'moment'

export const dateDayStart = (data) => {
  const dataObj = moment(data, 'DD/MM/YYYY').toDate()
  const dayStart =  moment(dataObj).startOf('day').toDate()
  return moment(dayStart).format('YYYY/MM/DD HH:mm:ss')
}

export const dateDayEnd = (data) => {
  const dataObj = moment(data, 'DD/MM/YYYY').toDate()
  const dayEnd = moment(dataObj).endOf('day').toDate()
  return moment(dayEnd).format('YYYY/MM/DD HH:mm:ss')
}