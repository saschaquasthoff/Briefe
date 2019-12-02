import { readFile } from './io';
import { mockedLocales, mockedMarkup } from '../../mocks/html';
import renderHTML from './html';

describe('renderHTML()', () => {
  test('should render a given template and write it to file', (done) => {
    renderHTML('test', mockedLocales, (err) => {
      expect(err).toBeNull();

      readFile('../../output/test.html', (err2, content) => {
        expect(err2).toBeNull();
        expect(content).toBe(mockedMarkup);
        done();
      });
    });
  });
});
