import React from "react"
import {useRootStore} from "./../genericStores/RootStore"
import HomeStore from "./nonGenericStores/HomeStore"
import TableStore from "./../genericStores/TableStore"
import PaginationStore from "./../genericStores/PaginationStore"

export default function HomePage() {
    let rootStore = useRootStore();
    rootStore.createNewInstance("homeStore", HomeStore);
    rootStore.createNewInstance("tableStore", TableStore);
    rootStore.createNewInstance("paginationStore", PaginationStore);
    rootStore.getRoot.homeStore.helloWorld();

    return (
        <div>HOME PAGE</div>
    );
};
