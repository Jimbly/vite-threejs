import express from 'express';
import { helper, type TestType } from '../common/commonfile.ts';

const app = express();

app.get('/api/hello', (req, res) => {
  let foo: TestType = {
    n: helper(1),
    s: 's',
  };
  res.json(foo);
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
