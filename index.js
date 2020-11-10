import a from 'zzzzz';
import baz from 'zzzzz/baz'
import b from 'zzzzz/bar.js';
import c from 'zzzzz/foo/nested/c.js';

// a and c should both be 'exported-foo nested c'

export default { a, b, c, baz };