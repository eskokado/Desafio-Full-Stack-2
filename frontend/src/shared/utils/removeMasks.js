export const removeMaskCurrency = (value) => {
  const valueWithMask = value    
  const valueWithoutMask = valueWithMask.replace('R$ ', '').replace(',', '')
  const valueFloat = parseFloat(valueWithoutMask)
  return valueFloat  
}

export const removeMaskInt = (value) => {
  const pointWithMask = value
  const pointWithoutMask = pointWithMask.replace('_', '')
  const pointNumber = parseInt(pointWithoutMask)
  return pointNumber
}

