import { FormEvent, useState } from "react"
import { useAuthContext } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [onLogin, setOnLogin] = useState(true)
    const [onSubscribe, setOnSubscribe] = useState(false);
    const [onResetPassword, setOnResetPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate();
    const { signIn, subscribe } = useAuthContext();

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


    const handleLogin = () => {
        signIn(form.email, form.password).then((response) => {
            navigate('/')
        }).catch((error) => {
            console.log('error:  ', error)
        })
    }

    const handleRegister = () => {
        subscribe(form.email, form.password, form.username).then((response) => {
            toggleOnLogin()
        }).catch((error) => {
            // add toast
            console.log('error:  ', error)
        })
    } 

    const handleResetPassword = () => {
        // to do
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (onSubscribe) {
            handleRegister()
        } else if (onLogin) {
            handleLogin()
        } else {
            handleResetPassword()
        }
    }

    return <div className="flex items-center justify-center py-28">
        <form onSubmit={onSubmit}>
            <div className="bg-white w-full max-w-lg  rounded-lg p-6 flex flex-col h-full">
                <h1 className="font-semibold text-xl">
                    { onSubscribe && "Inscription" }
                    { onLogin && "Connexion" }
                    { onResetPassword && "Réinitialiser le mot de passe" }
                </h1>
                <div className="h-full items-center mt-6 space-y-6">
                    
                    <input className="w-full border py-1.5 px-4 rounded-lg" type="email" placeholder="contact@wakfubuilder.fr"  onChange={(e) => setForm({...form, email: e.target.value})}/>
                    {
                        onSubscribe && <input className="w-full border py-1.5 px-4 rounded-lg" type="text" placeholder="Pseudo" onChange={(e) => setForm({...form, username: e.target.value})}/>
                    }
                    {
                        !onResetPassword && <input className="w-full border py-1.5 px-4 rounded-lg" type="password" placeholder="************" onChange={(e) => setForm({...form, password: e.target.value})}/>
                    }
                    {
                        onSubscribe && <input className="w-full border py-1.5 px-4 rounded-lg" type="password" placeholder="Confirmer le mot de passe"  onChange={(e) => setForm({...form, confirmPassword: e.target.value})}/>
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

                <button className="bg-blue-500 rounded-lg py-1.5 text-white mt-6" type="submit">
                    { onSubscribe &&  "S'inscrire" }
                    { onLogin &&  "Se connecter" }
                    { onResetPassword && "Envoyer le mail" }
                </button>
            </div>
        </form>

    </div>

}


export default LoginPage