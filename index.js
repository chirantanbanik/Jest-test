const add = (a,b) => {
    return a+b
}

const err = () => {
    throw new Error("New Error occured")
}


module.exports = {
    add,
    err
}