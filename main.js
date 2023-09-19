// テストファイル: directoryTest.js

import fs from 'fs';
import path from 'path';
// システムのインポート

const testDirectory =
  '/home/ryosuke/project/reflected-and-stored-xss-test/samples'; // テストするディレクトリのパス

// describe('ディレクトリ内のファイルのテスト', () => {
const files = fs.readdirSync(testDirectory);

files.forEach((file) => {
  const filePath = path.join(testDirectory, file); // ファイルのフルパスを取得
  console.log(filePath);
  // test(`ファイル ${file} をテスト`, () => {
  //   const filePath = path.join(testDirectory, file); // ファイルのフルパスを取得
  //   const result = testFunction(filePath); // システムのテスト対象関数を呼び出す
  //   expect(result).toBe(true); // 期待値がtrueであることをアサート
  // });
});
// });
