import React from "react"
import { makeAutoObservable } from "mobx"

/* Store start */
export default class RootStore {
    constructor() {
        this.rootObject = {};
        makeAutoObservable(this,
            {},
            { autoBind: true }
        );
        console.log("RootStore instantiated");
    };

    get getRoot() {
        return this.rootObject;
    };
    /**
    * Creates a new class and adds it to the rootObject
    * Returns true/false depending on whether accessing same class returns true or false
    *
    * @param {string} key to access myClass inside a RootStore -> rootObject
    * @param {class} myClass
    * @return {boolean} boolean
    */
    createNewInstance(key, myClass) {
        this.rootObject[key] = new myClass(this);
        return !!this.rootObject[key];
    };
};
/* Store end */

/* Store helpers */
const StoreContext = React.createContext();

export const RootStoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useRootStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withRootStore = (Component) => (props) => {
  return <Component {...props} store={useRootStore()} />;
};
