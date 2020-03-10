import { takeLatest, put, all , call } from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'

import UserActionType from './user.types'


export function* signInWithGoogle(){
    try {
        const useRef = yield auth.signInWithPopup(googleProvider)
    } catch (error) {
        
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START)
}

export function* userSaga(){
    
    yield all([call(onGoogleSignInStart)])
}

