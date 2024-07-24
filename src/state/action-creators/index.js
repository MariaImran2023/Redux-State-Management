export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'diposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}