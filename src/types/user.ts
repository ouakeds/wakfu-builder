interface User {
    id: string,
    username: string,
    email: string,
    created_at: Date,
    password?: string,
}

export default User;