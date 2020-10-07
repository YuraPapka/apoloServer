// @ts-ignore
import generateData from 'data-generator-retail';
// @ts-ignore
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const data = generateData();
const filePath = path.join(__dirname, '..', process.env.dataSource + '.json');

if (require.main === module) {
  const json = JSON.stringify(data);

  fs.writeFile(filePath, json, {flag: 'w', encoding: 'utf8'}, (e) => {
    if (e) console.error(e, e.errno === -2 ? 'maybe you should create a folder path to the file' : '');
  });
}

export default data;

