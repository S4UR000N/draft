import React from "react"
import RootStore, {RootStoreProvider} from "./../genericStores/RootStore"
import {BrowserRouter as Router} from "react-router-dom"
import NavbarComponent from "./NavbarComponent"
import SwitchRoutes from "./SwitchRoutes"

export default function Layout() {
    const rootStore = new RootStore();

    return (
        <RootStoreProvider store={rootStore}>
            <Router>
                <NavbarComponent/>
                <SwitchRoutes/>
            </Router>
        </RootStoreProvider>
    );
};
