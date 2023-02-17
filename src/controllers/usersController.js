import users from '../../data/users.json'

export const getUsers = (_, res) => {
  res.status(200).send({ users })
}

export const getUsersById = (req, res) => {
  const { id } = req.params
  res.send({ message: `Usuario con id: ${id}`})
}
