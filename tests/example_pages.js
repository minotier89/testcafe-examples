import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t.takeScreenshot();
    await t.typeText('#developer-name', 'John Smith');
    const osName = t.browser.os.name.toLowerCase();
    if (osName === 'windows') {
        await t.click(Selector('#windows'));
    } else if (osName === 'macos') {
        await t.click(Selector('#macos'));
    } else {
        await t.click(Selector('#linux'));
    }
    await t.click('#submit-button');
    await t.takeScreenshot();
});
