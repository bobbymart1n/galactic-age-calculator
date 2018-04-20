describe('Galactic Age', function() {
  let date;

  it('should get current date', function() {
    date = new Date();
    expect(date.toDateString()).toEqual("Fri Apr 20 2018");
  });
  it('should get current date in milliseconds', function() {
    expect(Date.parse("April 20, 2018")).toEqual(1524207600000);
  });
  it('should convert current date in milliseconds to seconds', function() {
    expect(Date.parse("April 20, 2018") / 1000).toEqual(1524207600);
  });
  it('should convert user birthdate to seconds', function() {
    expect(Date.parse("August 28, 1987") / 1000).toEqual(557132400);
  });
});
