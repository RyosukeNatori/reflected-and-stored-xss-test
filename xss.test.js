import fs from 'fs';
import path from 'path';
import { describe, expect, test } from 'vitest';
import { assertXSS } from '../test.mjs';

// システムのインポート

const reflectedSamplesDirectory = path.join(__dirname, 'samples/reflected');
const storedSamplesDirectory = path.join(__dirname, 'samples/stored');

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

makeTest({ dirName: reflectedSamplesDirectory, testName: 'reflected-xss' });
makeTest({ dirName: storedSamplesDirectory, testName: 'stored-xss' });
