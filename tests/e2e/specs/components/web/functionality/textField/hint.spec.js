module.exports = {
  tags: ['component', 'textfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.textFieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13840775 Props /Name:hint, type : string'() {
    this.currentPage.setTextToHint('textfield-hint-test').assert.attributeContains('@textFieldInputField', 'placeholder', 'textfield-hint-test');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
