import express from 'express';
import promMiddleware from 'express-prometheus-middleware';

const app = express();

app.use(promMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true
}));

app.get('/health-check', async (req, res) => {
  res.json({});
});

app.get('/ready-check', async (req, res) => {
  res.json({});
});

app.get('/200', async (req, res) => {
  res.status(200).send('hello world 200');
});

app.get('/300', async (req, res) => {
  res.status(300).send('hello world 300');
});

app.get('/400', async (req, res) => {
  res.status(400).send('hello world 400');
});

app.get('/500', async (req, res) => {
  res.status(500).send('hello world 500');
});

app.listen(80, () => {
  console.log('listening on 80');
});

