const getOneItem = (id = '', model = {}) => {
    return new Promise((resolve, reject) => {
        model.findById(id, (err, item) => {
            try {
                resolve(item)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { getOneItem }