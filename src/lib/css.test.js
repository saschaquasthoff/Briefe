import path from 'path';
import { readFile } from './io';
import { mockedCSS } from '../../mocks/css';
import compileCSS from './css';

describe('compileCSS()', () => {
  test('should compile a given stylus code to CSS', (done) => {
    compileCSS((err) => {
      if (err) {
        throw err;
      }

      readFile(path.resolve(__dirname, '../../assets/styles/letter.css'), (readError, content) => {
        if (readError) {
          throw readError;
        }

        expect(content).toBe(mockedCSS);
        done();
      });
    });
  });
});
