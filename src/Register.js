import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passconfirm, setPassconfirm] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Inscription</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <input value={name} name="name" 
                onChange={(e) => setName(e.target.value)} id="name" placeholder="Nom" />

            <input value={email} 
                onChange={(e) => setEmail(e.target.value)}type="email" 
                placeholder="Email" id="email" name="email" />
                
            <input value={pass} 
                onChange={(e) => setPass(e.target.value)} type="password" 
                placeholder="Mot de passe" id="password" name="password" />
            
            <input value={passconfirm} 
                onChange={(e) => setPass(e.target.value)} type="password" 
                placeholder="Confirmer votre mot de passe" id="password1" name="password1" />

            <button type="submit">S'inscrire</button>
        </form>
        <button className="link-btn" 
            onClick={() => props.onFormSwitch('login')}>Avez-vous déjà un compte? Se connecter.</button>
    </div>
    )
}