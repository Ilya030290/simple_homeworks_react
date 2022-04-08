export type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingAT): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING-CHANGE': {
            return {...state, isLoading: action.isLoading};
        }
        default: return state;
    }
}

type LoadingAT = {
    type: 'LOADING-CHANGE',
    isLoading: boolean
}

export const loadingAC = (isLoading:boolean): LoadingAT =>  {
    return  {type: 'LOADING-CHANGE', isLoading};
} // fix any