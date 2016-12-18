import knex from 'knex';
import bookshelf from 'bookshelf';
import config from './../config.json';

let conn = knex(config.bookshelf);

export default bookshelf(conn);
