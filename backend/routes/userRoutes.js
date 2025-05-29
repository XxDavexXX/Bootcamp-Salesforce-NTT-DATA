const express = require('express');
const router = express.Router();
const fetchUsers = require('../services/fetchUsers');

router.get('/', async (req, res) => {
  try {
    const users = await fetchUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
