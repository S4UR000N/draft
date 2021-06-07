import React from "react"
import {useRootStore} from "./../genericStores/RootStore"
import AlbumsStore from "./nonGenericStores/AlbumsStore"

export default function AlbumsPage() {
    let rootStore = useRootStore();
    rootStore.createNewInstance("albumsStore", AlbumsStore);

    return (
        <div>ALBUMS PAGE</div>
    );
};
