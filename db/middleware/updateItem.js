const updateItem = (id="", model ={}, req={}) =>{
    return new Promise((resolve, reject)=>{
        model.findByIdAndUpdate(id,req,
            {
                new: true,
                runValidators: true
            },
            (err, item)=>{
                if (err) {
                    reject(res.status(404).json({message:error.message}))
                }
                resolve(item)
            })
    })
}