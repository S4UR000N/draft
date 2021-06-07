export default class HomeStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        console.log("HomeStore instantiated");
    };

    helloWorld() {
        console.log("hello world");
    };
};
