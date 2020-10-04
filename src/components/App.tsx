import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import Navbar from './Navbar';
import TodoList from './TodoList';

// criar como const, porque o app será imutável, poderia ser let
const App = () => {
    return (
        <TodoContext>

            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">

                    <Switch> // tem sua lógia parecida com o Switch Case 
                    // Sempre usar da mais específica para a mais genérica
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>

                        <Route path="/">
                            <h4>Minhas Tarefas</h4>
                            <TodoList></TodoList>
                        </Route>

                    </Switch>

                </div>
            </Router>

        </TodoContext>
    );
}

export default App;