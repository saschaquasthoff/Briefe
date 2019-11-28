import { readFile } from './io';
import { locales, expectedMarkup } from '../../mocks/html';
import renderHTML from './html';

describe('renderHTML()', () => {
  test('should render a given template and write it to file', (done) => {
    renderHTML('test', locales, (err) => {
      expect(err).toBeNull();

      readFile('../../Briefe/test.html', (err2, content) => {
        expect(err2).toBeNull();
        expect(content).toBe(expectedMarkup);
        done();
      });
    });
  });
});
