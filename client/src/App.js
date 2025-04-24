import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { Context } from './index'
import { observer } from 'mobx-react-lite'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])

if (loading) {
  return <Spinner animation={"grow"}/>
}

  return (
    <BrowserRouter>
    <NavBar/>
    <AppRouter/>
    <footer className="footer">
        <p style={{textAlign: 'center', marginTop: 20}}>© 2025 ТехноМир. Все права защищены.</p>
      </footer>
    </BrowserRouter>
  )
})

export default App