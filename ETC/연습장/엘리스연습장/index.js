function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a+b);
    });
}

module.exports = adder_promise;