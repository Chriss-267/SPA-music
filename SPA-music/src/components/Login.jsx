import logo from "../assets/logo2.png";
import React, { useState } from 'react';
import styles from "../styles/Login.module.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const validateForm = () => {
    const errors = [];
    if (!email) errors.push('El email es requerido.');
    if (!password) errors.push('La contraseña es requerida.');
    return errors;
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
    setAlert({ message: '', type: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setAlert({ message: validationErrors.join(' '), type: 'error' });
    } else {
      setAlert({ message: '¡Formulario enviado correctamente!', type: 'success' });
      setIsSubmitted(true); 
    }
  };

  return (
    <div className={`${styles.container} ${styles.centrar}`}>
      {isSubmitted ? (
        <div className={styles.mensaje}>
          <h1>¡Has iniciado sesión correctamente!</h1>
          <p>Bienvenido a Kodigo Music</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <img className={styles.img} src={logo} alt="kodigo logo" />
          <h1>Iniciar sesión en Kodigo Music</h1>

          <div className={styles.form_input}>
            <label>Correo electrónico</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Correo electrónico"
              onChange={(e) => handleChange(e, setEmail)}
            />
          </div>

          <div className={styles.form_input}>
            <label>Contraseña</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />
          </div>

          <button className={styles.btn} type="submit">Iniciar Sesión</button>

          {alert.message && (
            <div className={styles[alert.type]}>
              {alert.message}
            </div>
          )}

        </form>
      )}
    </div>
  );
}

export default Login;
