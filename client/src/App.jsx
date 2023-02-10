import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { AuthLayout } from './layouts/AuthLayout'
import { ProtectedLayout } from './layouts/ProtectedLayout'
import { ConfirmAccount } from './pages/ConfirmAccount'
import { ForgetPassword } from './pages/ForgetPassword'
import { Login } from './pages/Login'
import { ProjectAdd } from './pages/ProjectAdd'
import { ProjectEdit } from './pages/ProjectEdit'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { RecoverPassword } from './pages/RecoverPassword'
import { Register } from './pages/Register'
import { ProjectsProvider } from './context/ProjectsProvider'
import './Style.css';


function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectsProvider>
          <Routes>
            <Route
              path='/'
              element={<AuthLayout />}
            >
              <Route
                index
                element={<Login />}
              />
              <Route
                path='register'
                element={<Register />}
              />
              <Route
                path='forget-password'
                element={<ForgetPassword />}
              />
              <Route
                path='recover-password/:token'
                element={<RecoverPassword />}
              />
              <Route
                path='confirm/:token'
                element={<ConfirmAccount />}
              />
              <Route
                path='*'
                element={<h1>404 Not Found</h1>}
              />
            </Route>
            <Route path='/projects' element={<ProtectedLayout />}>
              <Route index element={<Projects />} />
              <Route path="/projects" element={<ProtectedLayout />}>
                <Route index element={<Projects />} />
                <Route path="create-project" element={<ProjectAdd />} />
                <Route path="edit-project/:id" element={<ProjectEdit />} />
                <Route path=":id" element={<Project />} />
              </Route>
            </Route>
          </Routes>
        </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App