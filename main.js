// テストファイル: directoryTest.js

const fs = require('fs');
const path = require('path');
const { testFunction } = require('./sampleSystem'); // システムのインポート

const testDirectory = '/path/to/your/directory'; // テストするディレクトリのパス

describe('ディレクトリ内のファイルのテスト', () => {
  const files = fs.readdirSync(testDirectory);

  files.forEach((file) => {
    test(`ファイル ${file} をテスト`, () => {
      const filePath = path.join(testDirectory, file); // ファイルのフルパスを取得
      const result = testFunction(filePath); // システムのテスト対象関数を呼び出す
      expect(result).toBe(true); // 期待値がtrueであることをアサート
    });
  });
});
