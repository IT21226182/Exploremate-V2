const getTokenFromHeader = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return config
}

export default getTokenFromHeader
