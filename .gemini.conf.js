module.exports = {
    rootUrl: 'http://localhost:3002/',
    // WebDriver URL to use for taking screenshots
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    windowSize: '1422x800',

    system: {
        plugins: {
            'html-reporter': {
                enabled: true,
                path: 'gemini-reports'
            }
        },
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
