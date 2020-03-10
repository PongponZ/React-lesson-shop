import UserActionType from './user.types.js'

export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: UserActionType.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type: UserActionType.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: UserActionType.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})


export const emailSignInStart = emailAndOassword => ({
    type: UserActionType.EMAIL_SIGN_IN_START,
    payload: emailAndOassword
})

export const emailSignInSuccess = user => ({
    type: UserActionType.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = error => ({
    type: UserActionType.EMAIL_SIGN_IN_FAILURE,
    payload: error
})