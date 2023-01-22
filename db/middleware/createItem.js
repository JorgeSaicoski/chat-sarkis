const createItem = (req = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.create(req, (err, item) => {
            if (err) {
                reject(err)
            }
            resolve(item)
        })
    })
}

module.exports = { createItem }