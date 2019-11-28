/**
 * @typedef Address
 * @property {string} street
 * @property {string} housenumber
 * @property {string} zip
 * @property {string} city
 */

/**
 * @typedef Sender
 * @property {string} forename
 * @property {string} surname
 * @property {string} street
 * @property {string} housenumber
 * @property {string} zip
 * @property {string} city
 * @property {string} mobile
 * @property {string} email
 * @property {string} homepage
 * @property {Account} account
 */

/**
 * @typedef Recipient
 * @property {string} company
 * @property {string} zip
 * @property {string} city
 */

/**
 * @typedef MetaData
 * @property {string} subject
 * @property {string} date
 * @property {Sender} sender
 * @property {string} salutation
 * @property {Recipient} recipient
 * @property {string} greetings
 */

/**
 * @typedef BankConnection
 * @property {BankAccount} private
 * @property {BankAccount} company
 */

/**
 * @typedef BankAccount
 * @property {string} bank
 * @property {string} iban
 * @property {string} bic
 */
