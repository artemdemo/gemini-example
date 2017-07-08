gemini.suite('navbar', (suite) => {
    suite.setUrl('/')
        // specifies CSS selectors of the elements that will be used to determine a region
        // of a web page to capture
        .setCaptureElements('.navbar')
        // capture screenshot right after the page is loaded
        .capture('plain');

    gemini.suite('fill search input', (suite) => {
        suite.setUrl('/')
            .setCaptureElements('.navbar')
            .capture('with text', function(actions, find) {
                actions.sendKeys(find('.search-input'), 'Hello gemini');
            });
    });
});