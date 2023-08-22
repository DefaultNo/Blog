export interface User {
    id: string
    username: string
    avatar?: string
}

// Интерфейс для state
export interface UserSchema {
    authData?: User
    _inited: boolean
}
