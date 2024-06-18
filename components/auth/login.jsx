// Author: Seth. Purpose: Handles login functionality for the application.

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./login.css"
import { getUserByPassword } from "../../services/userServices"






export const Login = () => {
  const [password, set] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByPassword(password).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "shop_user",
          JSON.stringify({
            id: user.id,
            isAdmin: user.isAdmin,
            gold: user.gold,
            name: user.name,
            password: user.password
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="auth-container">
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <h1 className="header">Welcome weary traveler.</h1>
          <h2>What's the password?</h2>
          <fieldset className="auth-fieldset">
            <div>
              <input
                type="password"
                value={password}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Password"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <button type="submit" className="auth-button">Enter</button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  )
}

