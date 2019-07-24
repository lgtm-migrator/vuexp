module.exports = {
  tags: ['component', 'vxpTextfield'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.vxpTextfieldPage();
    this.currentPage
      .navigate(client.globals.devUrl + 'components/vxp-textfield.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  'C13943417 Check textfield blur'() {
    this.currentPage.setBlur().assert.containsText('@eventOutput', 'blur');
  },
  after: function(client, done) {
    client.end().customPerform(done);
  },
};
