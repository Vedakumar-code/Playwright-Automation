export class basePage{

    constructor(page)
    {
        this.page = page;

    }

    async navigate(url)
    {
        await this.page.goto(url);
    }

    async click(locator)
    {
        await locator.click();
    }

    async fill(locator, value)
    {
        await locator.fill(value);
    }

    async select(locator, value)
    {
        await locator.selectOption(value);
    }

}

