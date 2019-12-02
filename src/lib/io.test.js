import fs from 'fs';
import path from 'path';
import { readFile, writeFile } from './io';

const filename = path.resolve(__dirname, 'testfile.txt');

describe('readFile()', () => {
  test('reads a file correctly', (done) => {
    const content = 'testcontent';

    fs.writeFile(filename, content, (writeError) => {
      if (writeError) {
        throw writeError;
      }

      readFile(filename, (readError, fileContent) => {
        if (readError) {
          throw readError;
        }

        expect(fileContent).toBe(content);
        done();
      });
    });
  });

  afterEach(() => {
    fs.unlink(filename, (err) => { if (err) throw err; });
  });
});

describe('writeFile()', () => {
  test('writes a given content to a file', (done) => {
    const content = 'testcontent';

    writeFile(filename, content, (writeError) => {
      if (writeError) {
        throw writeError;
      }

      fs.readFile(filename, 'utf8', (readError, fileContent) => {
        if (readError) {
          throw readError;
        }

        expect(fileContent).toBe(content);
        done();
      });
    });
  });

  afterEach(() => {
    fs.unlink(filename, (err) => { if (err) throw err; });
  });
});
