gemini.suite('marketing card', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.marketing-card')
        .before(function(actions, find) {
            this.button = find('.marketing-card .btn');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
        .capture('clicked', function(actions, find) {
            actions.mouseUp(this.button);
        });
});