import fs from 'fs';
import path from 'path';
import { describe, expect, test } from 'vitest';
import { assertXSS } from '../test.mjs';

// システムのインポート

const reflectedSamplesDirectory = path.join(__dirname, 'samples/reflected');
const storedSamplesDirectory = path.join(__dirname, 'samples/stored');

export const makeTest = ({ dirName, testName }) => {
  describe(testName, () => {
    const files = fs.readdirSync(dirName);

    files.forEach((file) => {
      expectAssertXSS({ filePath: path.join(dirName, file) });
    });
  });
};

const expectAssertXSS = ({ filePath }) => {
  test.concurrent(`ファイル ${filePath} をテスト`, async () => {
    expect(assertXSS({ filePath })).toBe(true);
  });
};

makeTest({ dirName: reflectedSamplesDirectory, testName: 'reflected-xss' });
makeTest({ dirName: storedSamplesDirectory, testName: 'stored-xss' });
