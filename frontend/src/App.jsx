import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import DetailedAnalysis from './pages/DetailedAnalysis'; // ✅ Make sure it's imported

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <Layout>
              <Expenses />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* 🔍 NEW Detailed Analysis Route */}
      <Route
        path="/detailed-analysis"
        element={
          <ProtectedRoute>
            <Layout>
              <DetailedAnalysis />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
