export const fetchData = () => {
    return (dispatch) => {
        dispatch({
            type: 'fetch_data'
        })
    }
}