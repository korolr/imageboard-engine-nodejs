import bookshelf from '../bookshelf';

/**
 * Example User Model.
 */
const User = bookshelf.Model.extend({
    tableName: 'users'
});

export default User;
