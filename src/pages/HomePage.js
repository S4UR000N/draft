import React from "react"
import {useRootStore} from "./../genericStores/RootStore"
import HomeStore from "./nonGenericStores/HomeStore"
import TableStore from "./../genericStores/TableStore"
import PaginationStore from "./../genericStores/PaginationStore"

export default function HomePage() {
    let rootStore = useRootStore();
    let homeStore = rootStore.createNewInstance(HomeStore);
    let tableStore = rootStore.createNewInstance(TableStore);
    let paginationStore = rootStore.createNewInstance(PaginationStore);

    return (
        <div>HOME PAGE</div>
    );
};
