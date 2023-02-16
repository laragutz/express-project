import users from '../../data/users.json'

export const getUsers = (_, res) => {
  res.render('users', { users: users })
}

export const getUsersJson = (_, res) => {
  res.send(users)
}