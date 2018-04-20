const date = new Date();
describe('Age', function() {

  it('should get current date', function() {
    expect(date.toDateString()).toEqual("Fri Apr 20 2018");
  });
});
