import React from 'react'
import Sidemenu from './components/sidemenu'
import Header from './components/Header'
import Layout from './components/MainLayout/Layout'
import Template from './template/Template'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/style.css'
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Header/>
            <Sidemenu/>
                    <Route path='/' exact>
                    <Template>
            <Layout>
                <div></div>
            </Layout>
            </Template>
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    )
}
