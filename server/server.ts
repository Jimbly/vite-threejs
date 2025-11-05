import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { helper, type TestType } from '../common/commonfile.ts';
const dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.get('/api/hello', (req, res) => {
  let foo: TestType = {
    n: helper(1),
    s: 's',
  };
  res.json(foo);
});

app.get('/api/test.png', (req, res) => {
  fs.createReadStream(`${dirname}/test.png`).pipe(res);
});

console.log(dirname);

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log('Backend running on http://localhost:3000');
});
