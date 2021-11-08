import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthorDetails } from './AuthorDetails';
import { BookDetails } from './BookDetails';
import { Dashboard } from './Dashboard';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    
                <Dashboard />
            </Route>
            <Route path="/authors/:id">
                <AuthorDetails/>
            </Route>
            <Route path="/bookdetail/:id">
                <BookDetails />
            </Route>
            </Switch>

        </div>
    );
}
