export const requiredField = (value) => {
    if(value) return undefined
    return "Input is not will be empty"
}

export const maxLength = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `Max symbols: ${maxLength}`
    return undefined
}