import HomePage from "../pageobjects/home.page";

describe("homepage", function () {
    it("should display hello world", function () {
        HomePage.open();
        console.log("*******" + HomePage.pageText.getText());
        expect(HomePage.pageText).toBeExisting();
    });
});
