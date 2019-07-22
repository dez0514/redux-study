// 写成方法的形式可以传值
export const increaseAction = () => {
    return {
        type: 'INCREASE'
    }
}

export const updateStateAction = (prevState) => {
    return {
      type: 'UPDATE_STATE',
      prevState
    }
}