import React, { ReactElement, useContext, useState } from "react";
import apiService from "../services/api.service";
import User from "../types/user";
import cookiesService from "../services/cookies.service";

export interface AuthContextInterface {
    user: User | undefined;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
    subscribe: (email: string, password: string, username: string) => Promise<boolean>;
}

export const defaultValues: AuthContextInterface = {
    user: undefined,
    signIn: (email: string, password: string) => new Promise((resolve, reject) => resolve(true)),
    signOut: () => {},
    subscribe: (email: string, password: string, username: string) => new Promise((resolve, reject) => resolve(true))
};

const AuthContext = React.createContext<AuthContextInterface>(defaultValues);

export const AuthProvider = ({children} : {
    children: ReactElement
}) => {
   
    const [user, setUser] = useState <User | undefined> (undefined);
  
    const cleanAuth = () => {
        cookiesService.delete('access-token');
        setUser(undefined)
    }

    const profile = () => {
        return new Promise((resolve, reject) => {
            apiService.get<User>('/profile').then((response) => {
                setUser(response.data)
            }).catch((error) => {
                cleanAuth()
                reject(error)
            })
        })
    }

    const signIn = (email: string, password: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            apiService.post<{ access_token: string }>('/auth/login', {email, password}).then((response) => {
                const accessToken = response.data.access_token;
                cookiesService.set('access-token', accessToken)
                profile()
                resolve(true)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    
    const signOut = () => {
        return new Promise((resolve, reject) => {
            apiService.get('/auth/logout').then((response) => {
                cleanAuth()
                resolve(true)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    
    const subscribe = (email: string, password: string, username: string): Promise<boolean> => {

        const payload = {email: email, password: password, username: username}

        console.log('payload: ', payload)
        return new Promise((resolve, reject) => {
            apiService.post('/auth/register', payload).then((response) => {
                resolve(true)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    return <AuthContext.Provider value={{user, signIn, signOut, subscribe}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
