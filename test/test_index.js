const assert = require('assert');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const cheerio = require('cheerio');

const indexTemplate = fs.readFileSync('views/index.ejs', 'utf8');

describe('index.ejs', () => {
  const data = {
    title: 'My Hotel',
    lead: 'Welcome to our luxurious hotel',
    paragraph: 'Learn about the history of our hotel',
    footer: 'Copyright © My Hotel',
    features: [
      {
        title: 'Free Breakfast',
        description: 'Enjoy a complimentary breakfast',
        icon: 'fa-utensils',
        color: 'green'
      },
      {
        title: 'Fitness Center',
        description: 'Stay in shape with our fitness center',
        icon: 'fa-dumbbell',
        color: 'blue'
      },
      {
        title: 'Pool',
        description: 'Take a dip in our pool',
        icon: 'fa-swimming-pool',
        color: 'yellow'
      },
      {
        title: 'Room Service',
        description: 'Order food to your room',
        icon: 'fa-concierge-bell',
        color: 'red'
      }
    ]
  };

  it('should contain the correct title', () => {
    const html = ejs.render(indexTemplate, data);
    const $ = cheerio.load(html);
    assert.strictEqual($('title').text(), data.title);
  });

  it('should display the correct lead', () => {
    const html = ejs.render(indexTemplate, data);
    const $ = cheerio.load(html);
    assert.strictEqual($('.lead').text(), data.lead);
  });

  it('should contain the correct paragraph', () => {
    const html = ejs.render(indexTemplate, data);
    const $ = cheerio.load(html);
    assert.strictEqual($('#home-info p').text(), data.paragraph);
  });

  it('should contain the correct footer', () => {
    const html = ejs.render(indexTemplate, data);
    const $ = cheerio.load(html);
    assert.strictEqual($('#main-footer').text().trim(), data.footer);
  });

  it('should display the correct number of features', () => {
    const html = ejs.render(indexTemplate, data);
    const $ = cheerio.load(html);
    const numFeatures = data.features.length;
    const numBoxes = $('.box').length;
    assert.strictEqual(numBoxes, numFeatures);
  });
});
