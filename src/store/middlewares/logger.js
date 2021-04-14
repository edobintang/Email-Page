const logger = store => next => action => {
    // sebelum action dilakukan
    console.log('dispatch action', action)

    next(action)

    // setelah action dilakukan
    console.log('result action', store.getState())
}

export default logger