import fs from 'fs';
import path from 'path';
// システムのインポート

const testDirectory =
  '/home/ryosuke/project/reflected-and-stored-xss-test/samples'; // テストするディレクトリのパス
const testName = 'reflected-xss'; // テスト名

export const makeTest = ({ dirName, testName }) => {
  const files = fs.readdirSync(dirName);
  describe(testName, () => {
    const files = fs.readdirSync(dirName);

    files.forEach((file) => {
      exprectAssertXSS({ filePath: path.join(dirName, file) });
    });
  });
};

const exprectAssertXSS = async ({ filePath }) => {
  test(`ファイル ${filePath} をテスト`, async () => {
    expect(await assertXSS({ filePath })).toBe(true);
  });
};

makeTest({ dirName: testDirectory, testName });
