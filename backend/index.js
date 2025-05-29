const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
