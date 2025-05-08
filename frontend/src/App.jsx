import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importa las vistas o componentes para las rutas
import Login from './components/Login'; // Asegúrate de tener este componente
import Home from './components/Home';   // Asegúrate de tener este componente
import UserDashboard from './components/UserDashboard'; // Otro ejemplo
import AdminDashboard from './components/AdminDashboard'; // Otro ejemplo

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Ruta para la página de inicio (Home) */}
          <Route path="/" exact component={Home} />

          {/* Ruta para la página de Login */}
          <Route path="/login" component={Login} />

          {/* Ruta para el panel de usuario */}
          <Route path="/user-dashboard" component={UserDashboard} />

          {/* Ruta para el panel de administrador */}
          <Route path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
