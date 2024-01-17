//functions that retrieve the current date and time

const getCurrentDateTime = () => {
  const currentDateTime = new Date();
  return currentDateTime.toLocaleString();
};

const updateDateTime = () => {
  const dateTimeElement = document.querySelector('.hero__time');
  if (dateTimeElement) {
    dateTimeElement.textContent = getCurrentDateTime();
  }
};

document.addEventListener('DOMContentLoaded', updateDateTime);

//functions that retrieve current cryptocurrency prices

const getCryptoPrice = () => {
  updateDateTime();
  const cryptoSymbols = ['bitcoin', 'ethereum'];
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbols.join(
    ','
  )}&vs_currencies=usd`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cryptoSymbols.forEach((symbol) => {
        const cryptoPrice = data[symbol]?.usd;
        console.log(`Current ${symbol} price: $${cryptoPrice}`);
      });
      console.log('-----------------------------');
      showPrices(data, cryptoSymbols);
    })
    .catch((error) => console.log(error, 'Data download error'));

  const currentDate = new Date();
  console.log(currentDate);
};

const showPrices = (data, cryptoSymbols) => {
  const resultArea = document.querySelector('.crypto__list');

  if (resultArea) {
    resultArea.innerHTML = '';

    cryptoSymbols.forEach((symbol) => {
      const item = document.createElement('div');
      item.className = 'price';
      const cryptoPrice = data[symbol]?.usd;

      if (cryptoPrice !== undefined) {
        item.innerHTML = `<div class="crypto-symbol"> Current <strong>${symbol}</strong> price : $${cryptoPrice}</div>`;
        resultArea.appendChild(item);
      } else {
        console.error(`No data found for ${symbol}`);
      }
    });
  } else {
    console.error("Element with class 'crypto__list' not found.");
  }
};

const btn = document
  .querySelector('.hero__button')
  .addEventListener('click', getCryptoPrice);
