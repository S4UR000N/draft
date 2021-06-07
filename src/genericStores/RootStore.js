import React from "react"
import { makeAutoObservable } from "mobx"

/* Store start */
export default class RootStore {
    constructor() {
        makeAutoObservable(this,
            {},
            { autoBind: true }
        );
        console.log("RootStore instantiated");
    };

    /**
    * Returns new instance of a class with reference to some other class
    *
    * @param {class} myClass
    * @param {object} defaultRootStore can accept any object
    * @return {object} instance of myClass
    */
    createNewInstance(myClass, defaultRootStore = this) {
        let instance = new myClass(defaultRootStore);
        return instance;
    }
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
