describe("Take Me To Redux", function() {

  describe("Convert Date and Time", function() {
    it("Converts a ISO 8601 BST formatted date and time to a Redux-friendly version", function() {
      var result = convertDateAndTime('2012-08-22T20:45:00+01:00');
      expect(result).toEqual('2012-08-22/19-45-00');
    });
  });
  describe("Convert Date and Time", function() {
    it("Converts a ISO 8601 GMT formatted date and time to a Redux-friendly version", function() {
      var result = convertDateAndTime('2012-11-22T20:45:00Z');
      expect(result).toEqual('2012-11-22/20-45-00');
    });
  });

  describe("Create Redux 1 link", function() {
    it("Converts a date and channel as supplied by the /programmes API to the equivalent Redux 1 URL", function() {
      var result = convertToRedux1Link("2011-10-11T15:30:00+01:00","bbc_radio_four");
      expect(result).toEqual("https://g.bbcredux.com/programme/bbcr4/2011-10-11/14-30-00");
    });
  });

  // describe(function() {});
});

describe("When createReduxLink is called", function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  it('should redirect to the related redux page', function () {
    spyOn(window, 'open');
    goToRedux('http://www.bbc.co.uk/programmes/b015p86jwin');

    expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');

    expect(window.open).toHaveBeenCalled();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });


});
/*What should this test?
- ISO date in GMT - done
-ISO date in BST - done
- check non ISO date input returns something friendly (test redux as to what a friendly output could be eg calender for that channel)
- ditto a null
*/
