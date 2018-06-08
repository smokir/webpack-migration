const _extensions = [];

module.exports = {
    addExtension(key, extension) {
        _extensions[key] = extension;
    },
    doSomething() {
        const a = _extensions.a();
        const b = _extensions.b();
        return a + b;
    }
};
