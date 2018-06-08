const common = require('./common');

module.exports = function(library) {
    library.addExtension('a', () => common() * 2);
};
