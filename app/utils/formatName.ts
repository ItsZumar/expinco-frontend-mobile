export const formatName = (firstName: string, lastName: string) => {
  if (!firstName && !lastName) {
    return "Unknown Name"
  } else if (!firstName) {
    return lastName
  } else if (!lastName) {
    return firstName
  } else {
    return `${firstName} ${lastName}`
  }
}
