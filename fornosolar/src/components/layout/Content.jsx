import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Inicial'
import Sobre from '../../views/contents/Sobre'
import Contato from '../../views/contents/Contato'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route path="/contato">
                <Contato />
            </Route>
        </Switch>
    </main>
)
export default Content