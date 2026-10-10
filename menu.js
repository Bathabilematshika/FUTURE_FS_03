const WHATSAPP = '+27722548860';

const menu = {
  'Mega Kota': [
    ['Polony, Atchaar, Chips', 20],
    ['Polony, Atchaar, Chips, Cheese', 24],
    ['Polony, Atchaar, Chips, Egg', 25],
    ['Polony, Atchaar, Chips, Vienna', 30],
    ['Polony, Atchaar, Chips, Egg, Cheese', 28],
    ['Polony, Atchaar, Chips, Russian', 37],
    ['Polony, Atchaar, Chips, Burger, Cheese', 35],
    ['Polony, Atchaar, Chips, Burger, Egg', 33],
    ['Polony, Atchaar, Chips, Vienna, Cheese', 34],
    ['Polony, Atchaar, Chips, Vienna, Egg', 32],
    ['Polony, Atchaar, Chips, Burger, Cheese, Egg', 36],
    ['Polony, Atchaar, Chips, Hake', 37],
    ['Polony, Atchaar, Chips, Cheese, Egg, Russian', 44],
    ['Polony, Atchaar, Chips, Vienna, Russian', 48],
    ['Polony, Atchaar, Chips, Vienna, Cheese, Egg, Russian, Burger', 62],
  ],
  'Kota Extras': [
    ['Burger', 12], ['Cheese', 4], ['Egg', 5], ['Vienna', 17], ['Russian', 25],
  ],
  'Chips': [
    ['Small', 25], ['Medium', 35], ['Large', 40],
  ],
  'Dagwood (includes chips)': [
    ['Polony, Cheese, Egg', 31],
    ['Polony, Burger, Cheese', 34],
    ['Polony, Burger, Egg', 35],
    ['Polony, Cheese, Egg, Vienna', 41],
    ['Polony, Burger, Cheese, Egg', 47],
    ['Polony, Burger, Cheese, Vienna', 52],
    ['Polony, Burger, Egg, Vienna', 53],
    ['Polony, Burger, Cheese, Russian', 61],
    ['Polony, Burger, Egg, Russian', 63],
    ['Polony, Burger, Cheese, Egg, Vienna', 57],
    ['Polony, Burger, Bacon, Egg, Cheese', 61],
  ],
  'Fish & Chips': [
    ['Fish & Chips', 55],
    ['Footlong & Chips', 60],
    ['Fish, Chips & Salad', 65],
    ['Fish, Chips & Footlong', 90],
    ['4 Wings, Fish, Footlong, Chips & Salad', 140],
  ],
  'Dagwood Extras': [
    ['Fish', 30], ['Footlong only', 35], ['Green salad', 30],
  ],
};

function orderLink(name) {
  const text = encodeURIComponent('Hi Kota Joint, I would like to order: ' + name);
  return 'https://wa.me/' + WHATSAPP + '?text=' + text;
}

const container = document.getElementById('menu');
if (container) {
  for (const [section, items] of Object.entries(menu)) {
    const block = document.createElement('section');
    block.className = 'menu-section';
    block.innerHTML = '<h2>' + section + '</h2>' + items.map(([name, price]) =>
      '<div class="item"><span class="name">' + name + '</span>' +
      '<span class="price">R' + price + '</span>' +
      '<a class="order" href="' + orderLink(name) + '" target="_blank" rel="noopener">Order</a></div>'
    ).join('');
    container.appendChild(block);
  }
}
const wa = document.getElementById('wa-main');
if (wa) wa.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Hi Kota Joint, I would like to place an order.');