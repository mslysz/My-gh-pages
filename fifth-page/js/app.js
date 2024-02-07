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

const translationData = {
  pl: {
    welcome: 'Witaj W Naszym Świecie!',
    home: 'Strona główna',
    about: 'O nas',
    offer: 'Oferta',
    contact: 'Kontakt',
    international: 'Transport międzynarodowy',
    experience:
      'Doświadcz bezproblemowej globalnej wysyłki z Unity Logistics. Twój zaufany partner w transporcie międzynarodowym.',
    fast: 'Szybki i bezpieczny transport towarów',
    swift:
      'Przekonaj się o szybkości i bezpieczeństwie naszych usług transportowych, dostosowanych specjalnie do bezpiecznego i terminowego dostarczania cennych towarów.',
    modern: 'Nowoczesna flota pojazdów transportowych',
    modernTxt:
      'Zaufaj naszej nowoczesnej flocie transportowej, aby zapewnić wydajne i niezawodne rozwiązania dostawcze dla wszystkich Twoich wymagań dotyczących ładunków.',
    aboutTxt:
      '<strong>U</strong>nity <strong>L</strong>ogistics jest firmą transportową o ugruntowanej pozycji na rynku, znana z wysokiej jakości usług i niezawodności. Nasze wieloletnie doświadczenie pozwoliło nam zbudować silną reputację opartą na zaufaniu klientów. Dążymy do doskonałości w każdym aspekcie naszej działalności, zapewniając kompleksowe rozwiązania transportowe dostosowane do indywidualnych potrzeb klienta. Nasz zespół doświadczonych profesjonalistów stale zapewnia bezpieczeństwo i terminowość dostaw, gwarantując pełną satysfakcję klientów. Jesteśmy dumni z naszej historii sukcesów i z pasją podchodzimy do każdego nowego wyzwania. Dla naszej firmy, Unity Logistics, klient jest zawsze na pierwszym miejscu.',
    offerT: 'Nasza Oferta',
    firstOff: 'Samochody ciężarowe ',
    firstOfferTxt: 'Nowoczesna flota samochodów ciężarowych.',
    secondOff: 'Samoloty cargo',
    secondOffTxt: 'Najszybsza metoda transportu powietrznego.',
    thirdOff: 'Statki towarowe',
    thirdOffTxt: 'Nowoczesne i niezawodne statki towarowe.',
    featureTitle: 'Nasze cechy',
    featureD: 'Zaufany dostawca usług logistycznych od 2006 r.',
    worldTitle: 'Serwis na całym świecie',
    worldTxt: 'Nasze usługi są dostępne niemal na całym świecie.',
    truckTitle: 'Ekspresowa realizacja zleceń',
    truckTxt:
      'Gwarantujemy, że Twoje zamówienie zostanie zrealizowane z zachowaniem najwyższego priorytetu.',
    supportTitle: 'Wsparcie telefoniczne 24/7',
    supportTxt:
      'Zapewniamy wsparcie i kontakt 24/7. Nigdy nie zostawiamy bez wsparcia.',
    contactT: 'Skontaktuj się z nami',
    phoneT: 'Telefon: +12 345 678',
    adressT: 'Adres: San Jose, California USA',
    copyrightT: 'Prawa autorskie&copy; 2024 UnityLogistics',
  },
  en: {
    welcome: 'Welcome to Our World!',
    home: 'Home',
    about: 'About us',
    offer: 'Offer',
    contact: 'Contact',
    international: 'International transport',
    experience:
      'Experience Seamless Global Shipping with Unity Logistics. Your Trusted International Transport Partner.',
    fast: 'Fast and safe transport for your goods',
    swift:
      'Experience the swiftness and security of our transport services, tailored specifically for the safe and timely delivery of your valuable goods.',
    modern: 'Modern fleet of transport vehicles',
    modernTxt:
      'Rely on our modern transportation fleet to provide efficient and dependable delivery solutions for all your cargo requirements.',
    aboutTxt:
      '<strong>U</strong>nity <strong>L</strong>ogistics is a transportation company with a solid market position, known for high-quality services and reliability. Our many years of experience have allowed us to build a strong reputation based on customer trust. We strive for excellence in every aspect of our business, providing comprehensive transportation solutions tailored to individual customer needs. Our team of experienced professionals constantly ensures the safety and timeliness of deliveries, ensuring full customer satisfaction. We take pride in our history of successes and approach each new challenge with passion. For our company,Unity Logistics, the customer always comes first.',
    offerT: 'Our Offer',
    firstOff: 'Transport vehicles',
    firstOfferTxt: 'Modern fleet of transport vehicles.',
    secondOff: 'Cargo planes',
    secondOffTxt: 'The fastest method of air transport.',
    thirdOff: 'Cargo ships',
    thirdOffTxt: 'Modern and reliable cargo ships.',
    featureTitle: 'Our features',
    featureD: 'Trusted Logistics Provider Since 2006',
    worldTitle: 'Worldwide Service',
    worldTxt: 'Our services are available almost anywhere in the world.',
    truckTitle: 'Express execution of orders',
    truckTxt:
      'We guarantee that your order will be carried out expressly with the highest priority.',
    supportTitle: '24/7 Telephone Support',
    supportTxt:
      'We provide support and contact 24/7 . We will never leave you stranded without support.',
    contactT: 'Contact us',
    phoneT: 'Phone:',
    adressT: 'Adress: San Jose, California USA',
    copyrightT: 'Copyright&copy; 2024 UnityLogistics',
  },
};

const translateText = (language) => {
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
