const fs = require('fs');
const path = require('path');

const {
  metadata,
  content,
  expectedLocales,
} = require('../../mocks/parseLetter');

const {
  isARequiredPropertyMissing,
  split,
  parseLetter,
} = require('./parseLetter');

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

    expect(split(letter)).toMatchObject([metadata, content]);
  });
});

describe('parseLetter()', () => {
  test('should read the letter data from a given filename and parse it', (done) => {
    parseLetter('test', (err, locales) => {
      expect(err).toBe(null);
      expect(locales).toStrictEqual(expectedLocales);
      done();
    });
  });
});
