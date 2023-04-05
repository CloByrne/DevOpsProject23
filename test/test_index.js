var assert = require('assert');
var fs = require('fs');
var path = require('path');
const index = fs.readFileSync('views/index.ejs', 'utf8');
var ejs = require('ejs');

describe("index.ejs", () => {
    it("should contain the correct title", () => {
      const html = ejs.render(indexTemplate, { title });
      const $ = cheerio.load(html);
      expect($("title").text()).to.equal(title);
    });
  
    it("should display the correct lead", () => {
      const html = ejs.render(indexTemplate, { lead });
      const $ = cheerio.load(html);
      expect($(".lead").text()).to.equal(lead);
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
