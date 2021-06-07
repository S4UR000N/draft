import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import HomePage from "./../pages/HomePage"
import VehiclesPage from "./../pages/VehiclesPage"
import AlbumsPage from "./../pages/AlbumsPage"
import Error404 from "./../pages/Error404"

export default function SwitchRoutes() {
    return(
        <Switch>
            <Route exact path="/"><Redirect to="/home"/></Route>
            <Route path="/home"><HomePage/></Route>
            <Route path="/vehicles"><VehiclesPage/></Route>
            <Route path="/albums"><AlbumsPage/> </Route>
            <Route path="*"><Error404/></Route>
        </Switch>
    );
};
