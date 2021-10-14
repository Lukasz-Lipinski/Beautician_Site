const data = {
  classess: {
    container: 'container',
    menuNav: 'nav',
    pricelist: {
      pricelistNavigation: 'pricelistNavigation',
      serviceList: 'serviceList',
      serviceListItem: 'serviceListItem',
    },
    contact: {
      container: 'contact_container',
      address: 'address',
      contactForm: 'contactForm'
    },
    gallery: {
      thumbnail: 'thumbnail',
      modalImage: 'modalImage'
    }
  },
  linksName: [
    { link: "Strona główna", src: "home", componentName: 'Home' },
    { link: "Kontakt", src: "contact", componentName: 'Contact' },
    { link: "Cennik", src: "pricelist", componentName: 'PriceList' },
    { link: "Galeria", src: "gallery", componentName: 'Gallery' },
    { link: "Promocje", src: "specialoffers", componentName: 'SpecialOffers' },
    { link: "Rezerwacja", src: "reservation", componentName: 'Reservation' },
  ],
  servicesName: [
    { title: 'zabiegi na twarz' },
    { title: 'medycyna estetyczna' },
    { title: 'zabiegi na ciało' },
    { title: 'spa' },
    { title: 'dłonie i stopy' },
    { title: 'fryzjerstwo' },
  ],

  faceProcedurs: [
    { title: 'zabiegi na twarz' },
    { name: 'Terapia nawilżająca - ultra', price: '150', description: 'Zestaw maseczek nawilżających skórę twarzy. Dzięki nowoczesnej nanotechnologii oraz kosmetyków terapia regeneruje najgłębsze wartswy skóry oraz nawilża. Terapia zalecana dla osób mających problem z cerą, wyrównaniem kolorytu.' },
    { name: 'Zabieg rozświetlający', price: '210', description: 'Terapia rozświetlająca cerę, zawierająca specjalnie skomponowaną proporcję kwasu dobranego do skóry. Dzięki wysokiej jakości kosmetyków zabieg jest całkowicie bezpieczny a przed przystąpieniem sprawdzamy czy klient nie ma uczulenia na stosowany preparat. W przeciwnym wypadku stosujemy inny przeznaczony do tego celu.' },
    { name: 'Terapia lift wypełniająca zamrszczki', price: '350', description: 'Spersonalizowany zabieg o działaniu pielęgnacyjnym i leczniczym. Zabieg na twarz, szyję i dekolt, dzięki zastosowaniu naturalnych, aktywnych składników zabieg jest całkowicie kontrolowany. Zabieg jest nieinwazyjny oraz szybko wypełnia zamrszczki, co powoduje, że skóra szybko nabiera jędrności, gestości oraz wyrównuje się.' },
    { name: 'Oczyszczanie manualne', price: '180', description: 'Oczyszczanie manualne to zabieg pozwalający na oczyszczenie skóry z zanieczyszczeń i odblokowanie porów z nadmiaru łoju. Terapia jest szczególnie polecana dla osób mających problem z trądzikiem, nadmiernym łojotokiem czy nadmiaru sebum. Dzięki jej zastosowaniu skóra zostanie oczyszczona z nadmiaru zanieczyszczeń.' },
    { name: 'Terapia okolic oczu', price: '75', description: 'Jest to niechirurgiczny zabieg, który polega na liftingu skóry pod oczami bez użycia skalepla. Jest to masaż stymulacyjny połączony z drenażem limfatycznym, który pozwala wyeliminować zmarszczki oraz niedoskonałości.' }
  ],

  aestheticMedicineProcedures: [
    { title: 'medycyna estetyczna' },
    { name: 'Kwas hialuronowy', price: '850', description: 'Zabieg polega na wypełnieniu bruzdy nosowo-wargowej poprzez wstrzyknięcie preparatu z kwasem hialuronowym i pozbycie się nadmiernych zamrszczek. Sam zabieg jes bezbolesny, jedynie odczuwalne mogą być ukłucia igły, z tego względu na życzenie klienta stosujemy miejscowe znieczulenie.' },
    { name: 'Botox - 2 strefy', price: '700', description: 'Zabieg polega na precyzyjnym wstrzyknięciu toksyny botulinowej w wybrane miejsce. Powoduje to zablokowanie przewodnictwa nerwowo-mięśniowego, co w efekcie powoduje osłabienie sił nadkatywnych mięśni. To ostatecznie prowadzi do redukcji zmarszczek.' },
  ],

  bodyProcedures: [
    { title: 'zabiegi na ciało' },
    { name: 'Radiofrekwencja mikroigłowa', price: '600', description: 'Zabieg na rozstępy podczas, którego laserem naświetla się rozstępy/blizny w celu ich eliminacji. Wiązka lasera trafia w skórę i przenika do warstwy skóry właściwiej, aby pobudzić ciało do regeneracji. Czas rekowalescencji wynosi do 3 dni. ' },
    { name: 'Drenaż limfatyczny', price: '170', description: 'Najskuteczniejszy zabieg w leczeniu obrzęków. Masaż powoduje przepchnięcie nagromadzonego pod skórą płynu, co powoduje poprawę krążenia.' },
  ],

  spaProcedures: [
    { title: 'spa' },
    { name: 'Masaż aromatyczny', price: ' 180', description: 'Masaż relaksacyjny całego ciała. Podczas sesji używane są naturalne olejki aromatyczne. Czas trwania masażu to 45 min.' },
    { name: 'Masaż gorącą czekoladą', price: '240', description: 'Masaż całego ciała z wykorzystaniem gorącej czekolady. Czas trwanina masażu to 60 min.' },
    { name: 'Peeling', price: '150', description: 'Peeling całego ciała z wykorzystaniem naturalnych olejków. Czas trwania zabiegu 40 min + 20 min (czas przygotowania przed i po zabiegu).' },
  ],

  palmsAndTailsProcedures: [
    { title: 'dłonie i stopy' },
    { name: 'Manicure hybrydowy', price: '100', description: 'Zabieg manicure + lakierowanie hybrydowe polegają na wykonaniu manicure wraz z wykończeniem przy użyciu lakieru hybrydowego utwardzanego w lampie UV.' },
    { name: 'Manicure japoński', price: '80', description: 'Dalekowschodnia technika polegająca na wzmocnieniu paznokci z wykorzystaniem składników odżywczych tj. witamina A + E, keratyny i krzemionki z morza japońskiego. Zabieg zalecany dla paznokci słabych, łamliwych i rozdwajających się.' },
    { name: 'Żelowanie naturalnej płytki', price: '130', description: 'Zabieg polega na żelowaniu naturalnej płytki i nałożeniu hybrydy na naturalną płytkę paznokcia (jeden kolor).' },
  ],

  hairutsProcedures: [
    { title: 'fryzjerstwo' },
    { name: 'Strzyżenie damskie + mycie + modelowanie - włosy krótkie', price: '90', description: 'Strzyżenie włosów krótkich według wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i odżywieniem włosów. Czas trwania 20-60 min.' },
    { name: 'Strzyżenie damskie + mycie + modelowanie - włosy śrenie', price: '120', description: 'Strzyżenie włosów średniej długości według wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i odżywieniem włosów. Czas trwania 20-60 min.' },
    { name: 'Strzyżenie damskie + mycie + modelowanie - włosy długie', price: '170', description: 'Strzyżenie włosów długich według wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i odżywieniem włosów. Czas trwania 20-60 min.' },
  ],
  contacts: {

  },
  galleryImg: [
    { alt: "manicure--1", className: 'thumbnail--0' },
    { alt: "haircut--1", className: 'thumbnail--1' },
    { alt: "haircut--2", className: 'thumbnail--2' },
    { alt: "manicure--2", className: 'thumbnail--3' },
    { alt: "manicure--3", className: 'thumbnail--4' },
    { alt: "manicure--4", className: 'thumbnail--5' },
    { alt: "manicure--4", className: 'thumbnail--6' },
    { alt: "manicure--4", className: 'thumbnail--7' },
    { alt: "manicure--4", className: 'thumbnail--8' },
    { alt: "manicure--4", className: 'thumbnail--9' },
    { alt: "manicure--4", className: 'thumbnail--10' },
    { alt: "manicure--4", className: 'thumbnail--11' },
    { alt: "manicure--4", className: 'thumbnail--12' },
    { alt: "manicure--4", className: 'thumbnail--13' },
    { alt: "manicure--4", className: 'thumbnail--14' },
    { alt: "manicure--4", className: 'thumbnail--15' },
    { alt: "manicure--4", className: 'thumbnail--16' },
    { alt: "manicure--4", className: 'thumbnail--17' },
    { alt: "manicure--4", className: 'thumbnail--18' },
    { alt: "manicure--4", className: 'thumbnail--19' },
  ]
}

export default data;


