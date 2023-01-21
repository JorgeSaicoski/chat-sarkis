const createItem = (req = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.create(req, (err, item) => {
            if (err) {
                reject(res.status(404).json({message:error.message}))
            }
            resolve(item)
        })
    })
}

module.exports = { createItem }