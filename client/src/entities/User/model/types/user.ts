export interface User {
    id: string
    username: string
}

// Интерфейс для state
export interface UserSchema {
    authData?: User
}
