module.exports = {
  tags: ['component', 'actionItem'],
  before: function(client, done) {
    this.currentPage = client.maximizeWindow().page.actionItemPage();
    this.currentPage
      .navigate('http://localhost:8080/components/action-item.html')
      .waitForElementVisible('body', 60000)
      .customPerform(function() {
        done();
      });
  },
  '	C13843431 Click Delete Button on Action Item'() {
    this.currentPage
      .selectDeleteIconOption()
      .clickDeleteButton()
      .assert.containsText('@deleteButtonLabel', 'Delete Icon Clicked');
  },

  after: function(client, done) {
    client.end().customPerform(done);
  },
};
