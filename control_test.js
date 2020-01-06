const Runner = require('testcafe');

let testcafe = null;

let runner;

const args = process.argv;
const browser = args[2];
const screenshot_dir = args[3];

Runner(null, '8000', '8001')
    .then(tc => {
        testcafe = tc;
        runner = testcafe.createRunner();
        return runner
            .src(`tests/example_pages.js`)
            .browsers(browser)
            .screenshots(screenshot_dir)
            .run();
    })
    .finally(() => {
        testcafe.close();
    });
