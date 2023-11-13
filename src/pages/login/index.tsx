import { useState } from "react"
import apiService from "../../services/api.service";

const LoginPage = () => {

    const [onLogin, setOnLogin] = useState(true)
    const [onSubscribe, setOnSubscribe] = useState(false);
    const [onResetPassword, setOnResetPassword] = useState(false);
    const toggleOnSubscribe = () => {
        setOnSubscribe(true)
        setOnLogin(false)
        setOnResetPassword(false)
    }
    const toggleOnLogin = () => {
        setOnSubscribe(false)
        setOnLogin(true)
        setOnResetPassword(false)
    }
    const toggleOnResetPassword = () => {
        setOnSubscribe(false)
        setOnLogin(false)
        setOnResetPassword(true)
    }

    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleLogin = () => {
        console.log('inside login')
        apiService.post('/auth/login', form).then((response) => {
            console.log('response:  ', response)
        }).catch((error) => {
            console.log('error:  ', error)
        })
    }

    const handleRegister = () => {
        apiService.post('/auth/register', form).then((response) => {
            console.log('response:  ', response)
            toggleOnLogin()
        }).catch((error) => {
            console.log('error:  ', error)
        })
        console.log('form: ', form)
    } 

    const handleResetPassword = () => {

    }

    const onSubmit = () => {
        if (onSubscribe) {
            handleRegister()
        } else if (onLogin) {
            handleLogin()
        } else {
            handleResetPassword()
        }
    }

    return <div className="flex items-center justify-center py-28">
        
        <div className="bg-white w-full max-w-lg  rounded-lg p-6 flex flex-col h-full">
            <h1 className="font-semibold text-xl">
                {onSubscribe &&  "Inscription"}
                {onLogin &&  "Connexion"}
                {onResetPassword &&  "Réinitialiser le mot de passe"}
            </h1>

            <div className="h-full items-center mt-6 space-y-6">
                
                <input className="w-full border py-1.5 px-4 rounded-lg" type="email" placeholder="contact@wakfubuilder.fr" onChange={(e) => setForm({...form, email: e.target.value })}/>

                {
                    onSubscribe && <input className="w-full border py-1.5 px-4 rounded-lg" type="text" placeholder="Pseudo" onChange={(e) => setForm({...form, username: e.target.value })}/>
                }

                {
                    !onResetPassword && <input className="w-full border py-1.5 px-4 rounded-lg" type="password" placeholder="************" onChange={(e) => setForm({...form, password: e.target.value })}/>
                }
                {
                    onSubscribe && <input className="w-full border py-1.5 px-4 rounded-lg" type="password" placeholder="Confirmer le mot de passe" onChange={(e) => setForm({...form, confirmPassword: e.target.value })}/>
                }

            </div>

            <div className="mt-6 flex w-full justify-between">
                {
                    !onResetPassword && (<button onClick={toggleOnResetPassword} className=" text-blue-700">Mot de passe oublié?</button>)
                }
                {
                    !onSubscribe && (<button onClick={toggleOnSubscribe} className=" text-blue-700">Pas encore inscrit?</button>)
                }
                {
                    !onLogin && (<button onClick={toggleOnLogin} className=" text-blue-700">Me connecter</button>)
                }
            </div>

            <button className="bg-blue-500 rounded-lg py-1.5 text-white mt-6" onClick={onSubmit}>
                { onSubscribe &&  "S'inscrire" }
                { onLogin &&  "Se connecter" }
                { onResetPassword && "Envoyer le mail" }
            </button>
        </div>
    </div>

}


export default LoginPage