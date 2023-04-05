var assert = require('assert');
var fs = require('fs');
var path = require('path');
var index = fs.readFileSync(path.resolve(__dirname, '../index.ejs'), 'utf8');
var ejs = require('ejs');

describe('index.ejs', function() {
  it('should contain the correct title', function() {
    var rendered = ejs.render(index, { title: 'My Hotel' });
    assert(rendered.includes('<title>My Hotel</title>'));
  });
  
  it('should display the correct lead', function() {
    var rendered = ejs.render(index, { lead: 'Welcome to My Hotel' });
    assert(rendered.includes('Welcome to My Hotel'));
  });
  
  it('should contain the correct paragraph', function() {
    var rendered = ejs.render(index, { paragraph: 'Learn about the history of our hotel' });
    assert(rendered.includes('Learn about the history of our hotel'));
  });
  
  it('should contain the correct footer', function() {
    var rendered = ejs.render(index, { footer: 'Copyright © My Hotel' });
    assert(rendered.includes('Copyright © My Hotel'));
  });
  
  it('should display the correct number of features', function() {
    var features = [
      { title: 'Free Breakfast', description: 'Enjoy a complimentary breakfast', icon: 'fa-utensils', color: 'green' },
      { title: 'Fitness Center', description: 'Stay in shape with our fitness center', icon: 'fa-dumbbell', color: 'blue' },
      { title: 'Pool', description: 'Take a dip in our pool', icon: 'fa-swimming-pool', color: 'yellow' },
      { title: 'Room Service', description: 'Order food to your room', icon: 'fa-concierge-bell', color: 'red' }
    ];
    var rendered = ejs.render(index, { features: features });
    var numFeatures = features.length;
    var numBoxes = (rendered.match(/<div class="box/g) || []).length;
    assert.equal(numFeatures, numBoxes);
  });
});
