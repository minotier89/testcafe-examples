const Runner = require('testcafe');

const args = process.argv;
const browser = args[2];
const screenshot_dir = args[3];

(async () => {
    const testcafe = await Runner(null, '8000', '8001', null, true);
    try {
        await testcafe
            .createRunner()
            .src(`tests/example_pages.js`)
            .browsers(browser)
            .screenshots(screenshot_dir)
            .run();
    } finally {
        await testcafe.close();
    }
})();
