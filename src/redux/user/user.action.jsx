import { UserActionType } from './user.types.js'

export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload:user
})