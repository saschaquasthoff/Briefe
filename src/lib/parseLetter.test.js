import fs from 'fs';
import path from 'path';
import { mockedMetadata, mockedContent, mockedLocales } from '../../mocks/parseLetter';
import parseLetter, { isARequiredPropertyMissing, split } from './parseLetter';

describe('isARequiredPropertyMissing()', () => {
  test('metadata contains all required properties', () => {
    expect(isARequiredPropertyMissing({
      subject: 'subject',
      date: 'date',
      content: 'content',
    })).toBe(false);
  });

  test('metadata missing at least one required property', () => {
    expect(isARequiredPropertyMissing({})).toBe(true);
  });
});

describe('split()', () => {
  test('should split a letter file in metadata and content', () => {
    const letter = fs.readFileSync(
      path.resolve(__dirname, '../../data/letter/test.markdown'),
      'utf8',
    );

    expect(split(letter)).toMatchObject([mockedMetadata, mockedContent]);
  });
});

describe('parseLetter()', () => {
  test('should read the letter data from a given filename and parse it', (done) => {
    parseLetter('test', (err, locales) => {
      expect(err).toBe(null);
      expect(locales).toStrictEqual(mockedLocales);
      done();
    });
  });
});
