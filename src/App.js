import React from 'react'
import Sidemenu from './components/sidemenu'
import Header from './components/Header'
import Layout from './components/MainLayout/Layout'
import './styles/style.css'
export default function App() {
    return (
        <div>
            <Header/>
            <Sidemenu/>
            <Layout>
                <div></div>
            </Layout>
        </div>
    )
}
