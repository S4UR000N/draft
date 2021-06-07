import React from "react"
import {useRootStore} from "./../genericStores/RootStore"
import VehiclesStore from "./nonGenericStores/VehiclesStore"

export default function VehiclesPage() {
    let rootStore = useRootStore();
    let vehiclesStore = rootStore.createNewInstance(VehiclesStore);

    return (
        <div>VEHICLES PAGE</div>
    );
};
