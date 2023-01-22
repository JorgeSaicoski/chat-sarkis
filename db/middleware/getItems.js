const getItems = async (req = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.find(req, (err, items) => {
            if (err) {
                reject(res.status(404).json({message:error.message}))
            }
            resolve(items)
        })
    })
}

module.exports = { getItems }