const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');

const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config({ path: path.resolve(__dirname, './.env.local') });
app.use(cors());

app.use(express.static(path.resolve(__dirname, './build')));
app.use(express.json());

app.get('/vehicles', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.get('/vehicles/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const html = fs.readFileSync(path.resolve(__dirname, './build/index.html'), 'utf-8').toString().trim();
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}cars`);
    const {
      amount,
      attribute: { brand, name, imageUrl },
    } = data.payload.find(({ id: vehicleId }) => id === vehicleId.toString());

    res.send(
      html.replace(
        '</head>',
        `
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${`${process.env.DEPLOY_URL}vehicles/${id}`}" />
      <meta property="og:title" content="${`${brand} ${name}`}" />
      <meta property="og:description" content="${`월 ${amount.toLocaleString()} 원`}" />
      <meta property="og:image" content="${imageUrl}" />
      </head>
    `
      )
    );
  } catch {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
  }
});

// 다른 곳으로 가면 모두 홈으로 리다이렉트
app.use('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
  res.redirect('/');
});

app.listen(PORT, () => console.log(`👂 listening on ${PORT}`));
