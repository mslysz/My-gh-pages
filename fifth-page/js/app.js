let translationData;

fetch('js/translationData.json')
  .then((response) => response.json())
  .then((data) => {
    translationData = data;
    translateText('en');
    setActiveButton('enBtn');
  })
  .catch((error) => console.error('Error loading translation data:', error));

export { translationData };

const elements = {
  plBtn: document.querySelector('#plBtn'),
  enBtn: document.querySelector('#enBtn'),
  welcomeText: document.querySelector('.home'),
  homeNavBtn: document.querySelector('.home-nav'),
  aboutNavBtn: document.querySelector('.about-nav'),
  offerNavBtn: document.querySelector('.offer-nav'),
  contactNavBtn: document.querySelector('.contact-nav'),
  interText: document.querySelector('.inter-text'),
  expText: document.querySelector('.exp-text'),
  fastText: document.querySelector('.fast-text'),
  swiftText: document.querySelector('.swift-text'),
  modernTitle: document.querySelector('.modern-title'),
  modernText: document.querySelector('.modern-text'),
  aboutText: document.querySelector('.about-text'),
  offerTitle: document.querySelector('.offer-title'),
  firstOffer: document.querySelector('.offer-1-title'),
  firstOfferText: document.querySelector('.offer-1-text'),
  secondOffer: document.querySelector('.offer-2-title'),
  secondOfferText: document.querySelector('.offer-2-text'),
  thirdOffer: document.querySelector('.offer-3-title'),
  thirdOfferText: document.querySelector('.offer-3-text'),
  features: document.querySelector('.features'),
  featureDate: document.querySelector('.feature-date'),
  world: document.querySelector('.world-title'),
  worldText: document.querySelector('.world-text'),
  truck: document.querySelector('.truck-title'),
  truckText: document.querySelector('.truck-text'),
  support: document.querySelector('.support-title'),
  supportText: document.querySelector('.support-text'),
  contactTitle: document.querySelector('.contact-title'),
  phone: document.querySelector('.phone'),
  adress: document.querySelector('.adress'),
  copyright: document.querySelector('.copyright'),
};

const translateText = (language) => {
  if (!translationData) {
    return;
  }
  elements.welcomeText.innerHTML = translationData[language].welcome;
  elements.homeNavBtn.innerHTML = translationData[language].home;
  elements.aboutNavBtn.innerHTML = translationData[language].about;
  elements.offerNavBtn.innerHTML = translationData[language].offer;
  elements.contactNavBtn.innerHTML = translationData[language].contact;
  elements.interText.innerHTML = translationData[language].international;
  elements.expText.innerHTML = translationData[language].experience;
  elements.fastText.innerHTML = translationData[language].fast;
  elements.swiftText.innerHTML = translationData[language].swift;
  elements.modernTitle.innerHTML = translationData[language].modern;
  elements.modernText.innerHTML = translationData[language].modernTxt;
  elements.aboutText.innerHTML = translationData[language].aboutTxt;
  elements.offerTitle.innerHTML = translationData[language].offerT;
  elements.firstOffer.innerHTML = translationData[language].firstOff;
  elements.firstOfferText.innerHTML = translationData[language].firstOfferTxt;
  elements.secondOffer.innerHTML = translationData[language].secondOff;
  elements.secondOfferText.innerHTML = translationData[language].secondOffTxt;
  elements.thirdOffer.innerHTML = translationData[language].thirdOff;
  elements.thirdOfferText.innerHTML = translationData[language].thirdOffTxt;
  elements.features.innerHTML = translationData[language].featureTitle;
  elements.featureDate.innerHTML = translationData[language].featureD;
  elements.world.innerHTML = translationData[language].worldTitle;
  elements.worldText.innerHTML = translationData[language].worldTxt;
  elements.truck.innerHTML = translationData[language].truckTitle;
  elements.truckText.innerHTML = translationData[language].truckTxt;
  elements.support.innerHTML = translationData[language].supportTitle;
  elements.supportText.innerHTML = translationData[language].supportTxt;
  elements.contactTitle.innerHTML = translationData[language].contactT;
  elements.phone.innerHTML = translationData[language].phoneT;
  elements.adress.innerHTML = translationData[language].adressT;
  elements.copyright.innerHTML = translationData[language].copyrightT;
};

const setActiveButton = (activeBtn) => {
  elements.plBtn.classList.toggle('active-btn', activeBtn === 'plBtn');
  elements.enBtn.classList.toggle('active-btn', activeBtn === 'enBtn');
};

elements.plBtn.addEventListener('click', () => {
  translateText('pl');
  setActiveButton('plBtn');
});
elements.enBtn.addEventListener('click', () => {
  translateText('en');
  setActiveButton('enBtn');
});
