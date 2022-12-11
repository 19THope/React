import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Connexion</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} 
                    onChange={(e) => setEmail(e.target.value)}type="email" 
                    placeholder="Email " id="email" name="email" />

                <input value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" placeholder="Mot de passe" id="password" name="password" />

                <button type="submit">Se connecter</button>
            </form>
            <button className="link-btn" 
                onClick={() => props.onFormSwitch('register')}>Vous n'avez pas de compte? Inscrivez-vous.</button>
        </div>
    )
}