import Page from "./page";

class HomePage extends Page {
    /**
     * define elements
     */
    get pageText() {
        return $("#p1");
    }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open("");
    }
}

export default new HomePage();
