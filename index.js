import express from 'express';


const app = express();

app.use('/', (req, res) => {
  res.send('Express server is up and running....')
});

app.listen(3000, () => console.log('Server is running in port 3000'));
