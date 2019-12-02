exports.mockedLocales = {
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

exports.mockedMarkup = `<!DOCTYPE html>
<html>
  <title>Lorem ipsum dolor sit amet</title>
  <meta charset="utf-8">
  <link href="../assets/styles/letter.css" rel="stylesheet">
</html>
<body>
  <hr class="marker marker--half_page">
  <hr class="marker marker--first_bend">
  <hr class="marker marker--second_bend">
  <p class="adresse sender"><span>Sascha Quasthoff</span>&bull;<span>Fleher Straße 83</span>&bull;<span> 40223 Düsseldorf</span></p>
  <p class="adresse recipient">Musterfirma GmbH<br>z. Hd. Max Mustermann<br>Musterstraße 123a<br>12345 Musterstadt
  </p>
  <div class="date">Düsseldorf, 05. Mai 2014</div>
  <div class="content">
    <h1 class="subject">Lorem ipsum dolor sit amet</h1>
    <p class="salutation">Sehr geehrte Damen und Herren,</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>

    <p class="greetings">Mit freundlichen Grüßen,<span class="name">Sascha Quasthoff</span></p>
  </div>
  <footer>
    <ul class="footnotes">
      <li class="footnote">
        <h2>Anschrift</h2>
        <p>Sascha Quasthoff<br>Fleher Straße 83<br>40223 Düsseldorf</p>
      </li>
      <li class="footnote">
        <h2>Kontakt</h2>
        <p>0151-65113007<br>sascha@quasthoff.de<br>www.quasthoff.de
        </p>
      </li>
      <li class="footnote">
        <h2>Bankverbindung</h2>
        <p>Bank<br>IBAN DE01234567890123456789<br>BIC ABCDEFGHXXX
        </p>
      </li>
    </ul>
  </footer>
</body>`;
