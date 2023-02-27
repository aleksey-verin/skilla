export function formatPhoneNumber(phone) {
  phone = phone.replace(/[^\d]/g, '')
  // для реального API
  if (phone.length == 11) {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2) $3-$4')
  }
  // для тестового API
  if (phone.length === 5) {
    return phone.replace(/(\d{1})(\d{2})(\d{2})/, '+$1($2*) *$3-****')
  }

  return null
}

export function getImageCall(in_out, status) {
  const call = { success: 'Дозвонился', missed: 'Не дозвонился' }
  let result
  if (in_out) {
    status === call.success ? (result = 'income') : (result = 'inc-missed')
  } else {
    status === call.success ? (result = 'outcome') : (result = 'out-missed')
  }
  return result
}

export function groupDataByDate(data) {
  const result = data.reduce((acc, item) => {
    const date = item.date_notime
    if (acc[date]) {
      acc[date].push(item)
    } else {
      acc[date] = [item]
    }
    return acc
  }, {})
  return result
}
