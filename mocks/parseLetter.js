exports.metadata = `
subject: Lorem ipsum dolor sit amet
date: 05. Mai 2014
salutation: Sehr geehrte Damen und Herren
recipient:
  company: Musterfirma GmbH
  forename: Max
  surname: Mustermann
  street: Musterstraße
  housenumber: 123a
  zip: 12345
  city: Musterstadt
greetings: Mit freundlichen Grüßen,
private: true
`;

exports.content = `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
`;

// exports.sender = `
// forename: Sascha
// surname: Quasthoff

// # address
// street: Fleher Straße
// housenumber: 83
// zip: 40223
// city: Düsseldorf

// # contact
// # phone: 0211-5143281
// mobile: 0151-65113007
// email: sascha@quasthoff.de
// homepage: www.quasthoff.de

// # bank account
// account:
//   private:
//     bank: Bank
//     # bank_code: 123456789
//     # account_number: 1234567890
//     iban: DE01234567890123456789
//     bic: ABCDEFGHXXX

//   company:
//     bank: Bank
//     # bank_code: 123456789
//     # account_number: 1234567890
//     iban: DE01234567890123456789
//     bic: ABCDEFGHXXX
// `;

exports.expectedLocales = {
  subject: 'Lorem ipsum dolor sit amet',
  date: '05. Mai 2014',
  salutation: 'Sehr geehrte Damen und Herren',
  recipient: {
    company: 'Musterfirma GmbH',
    forename: 'Max',
    surname: 'Mustermann',
    street: 'Musterstraße',
    housenumber: '123a',
    zip: 12345,
    city: 'Musterstadt',
  },
  greetings: 'Mit freundlichen Grüßen,',
  private: true,
  sender: {
    forename: 'Sascha',
    surname: 'Quasthoff',
    street: 'Fleher Straße',
    housenumber: 83,
    zip: 40223,
    city: 'Düsseldorf',
    mobile: '0151-65113007',
    email: 'sascha@quasthoff.de',
    homepage: 'www.quasthoff.de',
    account: {
      private: {
        bank: 'Bank',
        iban: 'DE01234567890123456789',
        bic: 'ABCDEFGHXXX',
      },
      company: {
        bank: 'Bank',
        iban: 'DE01234567890123456789',
        bic: 'ABCDEFGHXXX',
      },
    },
  },
  content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>\n',
};
