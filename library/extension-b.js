const common = require('./common');

module.exports = function(library) {
    library.addExtension('b', () => common() / 2);
};
