module.exports = {
  async me(req, res) {
    try {
      const user_id = req.user_id
      const user = await db('users').select('*').where('id', user_id).first();
      delete user.password
      return res.status(200).send({
        user,
      })
    } catch (e) {
      return res.send({
        message: e.message
      })
    }
  }, 
}