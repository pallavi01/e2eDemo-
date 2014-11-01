/**
 * Created by pallavi 
 */
describe('zoom in/out module', function () { 
  beforeEach(function() {
    browser.get('http://localhost:8080/demo/custom-controls.html');
  });
       
  it('should zoom out page one time', function() {     
    element(by.id('zoom-in')).click();
    var val1 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val1).toEqual(['matrix(0.666666724946765,0,0,0.666666724946765,-50.00001091427233,-50.00001091427233)']);
    });
	
	it('should zoom out page two time', function() {     
    element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
    var val2 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val2).toEqual(['matrix(0.8000001271565793,0,0,0.8000001271565793,-110.00002883275374,-110.00002883275374)']);
    });
	
	it('should zoom out page three time', function() {     
    element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
    var val3 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val3).toEqual(['matrix(0.9600001955032411,0,0,0.9600001955032411,-182.00005460262383,-182.00005460262383)']);
    });
	
	it('should zoom out page four time', function() {     
    element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
    var val4 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val4).toEqual(['matrix(1.1520003776550425,0,0,1.1520003776550425,-268.4000948066709,-268.4000948066709)']);
    });
	
	it('should zoom in page first time', function() {     
    element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-in')).click();
	element(by.id('zoom-out')).click();
	var val5 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val5).toEqual(['matrix(0.9600003331502194,0,0,0.9600003331502194,-182.0000606842089,-182.0000606842089)']);
    });
	
	it('should reset the page after zoomin', function() {   
    element(by.id('zoom-in')).click();  
    element(by.id('reset')).click();
    var val1 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val1).toEqual(['matrix(0.5555555820465088,0,0,0.5555555820465088,0,0)']);
    });
	
	it('should reset the page afte zoom out', function() {   
    element(by.id('zoom-out')).click();  
    element(by.id('reset')).click();
    var val1 = element.all(by.css('.viewport')).getAttribute('transform');
    expect(val1).toEqual(['matrix(0.5555555820465088,0,0,0.5555555820465088,0,0)']);
    });
	
	
});