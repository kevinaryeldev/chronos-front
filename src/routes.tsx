import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AdminCadastrar } from './pages/Admin/AdminCadastrar/AdminCadastrar'
import { AdminEditarColab } from './pages/Admin/AdminEditarColab/AdminEditarColab'
import { AdminHome } from './pages/Admin/AdminHome/AdminHome'
import { AdminListar } from './pages/Admin/AdminListar/AdminListar'
import { GestaoCadastrarEdicao } from './pages/Gestao/GestaoCadastrarEdicao/GestaoCadastrarEdicao'
import { GestaoEdicoes } from './pages/Gestao/GestaoEdicoes/GestaoEdicoes'
import { GestaoHome } from './pages/Gestao/GestaoHome/GestaoHome'
import { GestaoNovaEtapa } from './pages/Gestao/GestaoNovaEtapa/GestaoNovaEtapa'
import { GestaoNovoProcesso } from './pages/Gestao/GestaoNovoProcesso/GestaoNovoProcesso'
import { GestaoVerificarEdicao } from './pages/Gestao/GestaoVerificarEdicao/GestaoVerificarEdicao'
import { Login } from './pages/Login/Login'
import { NotFind } from './pages/NotFind/NotFind'
import { PaginaInicial } from './pages/Pagina Inicial/PaginaInicial'

const ROLES = {
  'Admin': 'Admin',
  'Home': 'ROLE_HOME',
  'Gestao': 'Gestao'
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>

        <Route path='/' element={<Login />} />
        
        <Route path='*' element ={<NotFind />} />


        <Route path='/admin'>
          <Route index element={<AdminHome />} />
          <Route path='/admin/cadastrar' element={<AdminCadastrar />} />
          <Route path='/admin/listar' element={<AdminListar />} />
          <Route path='/admin/editar-colaborador/:colaborador'  element={<AdminEditarColab />} />
        </Route>


        <Route path='/gestao'>
          <Route index element={<GestaoHome />} />
          <Route path='/gestao/cadastrar-nao-util' element={<GestaoCadastrarEdicao />} />
          <Route path='/gestao/edicoes' element={<GestaoEdicoes />} />
          <Route path='/gestao/cadastrar-edicao' element={<GestaoCadastrarEdicao />} />
          <Route path='/gestao/verificar-edicao/:edicao' element={<GestaoVerificarEdicao />}/>
          <Route path='/gestao/verificar-edicao/:edicao/nova-etapa' element={<GestaoNovaEtapa />} />
          <Route path='/gestao/verificar-edicao/:edicao/novo-processo'element={<GestaoNovoProcesso />} />
        </Route>

        <Route path="/pagina-inicial" element={<PaginaInicial />} />


      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}
