module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.confirmDialogPage();
    this.currentPage
      .navigate('http://localhost:8080/components/dialogs/confirm-dialog.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13839317 Check Click Ok Button on Confirm Dialog'() {
    this.currentPage
      .click('@confirm_button')
      .click('@ok_confirm')
      .assert.containsText('@confirm_label', 'Pressed OK');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
