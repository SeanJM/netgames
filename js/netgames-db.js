var itemDB = {}
itemDB.single = [{
  'name':'Call of Duty: Black Ops II',
  'windows':'active',
  'esrb':'Mature',
  'genre':'Action',
  'osx':'not-active',
  'rating':'40',
  'rating-count':'3,942',
  'list-price':'$59.99',
  'price':'$49.99',
  'developer':'Treyarch',
  'publisher':'Activision',
  'serial':'JU832-23-KH-UYE',
  'thumb':'cod-black-ops-2'
},
{
  'name':'Hero Academy',
  'windows':'active',
  'esrb':'Everyone',
  'genre':'Puzzle',
  'osx':'active',
  'rating':'45',
  'rating-count':'1,273',
  'list-price':'$29.99',
  'price':'$19.99',
  'update':'available',
  'developer':'Robot Entertainment',
  'publisher':'Robot Entertainment',
  'serial':'HKJH2H-SKHJD3',
  'package':'available',
  'thumb':'hero-academy'
},{
  'name':'The Sims 3',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Simulation',
  'osx':'not-active',
  'rating':'35',
  'rating-count':'4,938',
  'list-price':'$49.99',
  'price':'$39.99',
  'developer':'The Sims Studio',
  'publisher':'Electronic Arts',
  'serial':'JU832-23-KH-UYE',
  'package':'available',
  'thumb':'sims3'
},{
  'name':'New Super Mario Bros U',
  'windows':'active',
  'esrb':'Everyone',
  'genre':'Action',
  'rating':'50',
  'rating-count':'914',
  'list-price':'$49.99',
  'price':'$39.99',
  'update':'available',
  'developer':'Nintendo',
  'publisher':'Nintendo of America',
  'serial':'JU832-23-KH-UYE',
  'thumb':'mario'
},{
  'name':'Super Meat Boy',
  'windows':'active',
  'osx':'active',
  'esrb':'Teen',
  'genre':'Action',
  'rating':'45',
  'rating-count':'1,102',
  'list-price':'$19.99',
  'price':'$9.99',
  'developer':'Team Meat',
  'publisher':'Team Meat',
  'serial':'JU832-23-KH-UYE',
  'package':'available',
  'thumb':'super-meat-boy'
}];
itemDB.pkg = [{
  'name':'The Sims 3: Super Fun Pack',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Simulation',
  'osx':'active',
  'rating':'45',
  'rating-count':'914',
  'price':'14',
  'package-count':'12',
  'developer':'The Sims Studio',
  'publisher':'Electronic Arts',
  'update':'available',
  'serial':'Not Applicable',
  'games':[{
    'sub-name':'The Sims 3',
    'thumb-small':'./img/game-thumb_sims3-small.png',
    'sub-rating':'45'
    },{
    'sub-name':'The Sims 3: Ambitions',
    'thumb-small':'./img/game-thumb_sims3-ambitions-small.png',
    'sub-rating':'35'
    },{
      'sub-name':'The Sims 2: University',
      'thumb-small':'./img/game-thumb_sims2-university-small.png',
      'sub-rating':'30'
    },{
      'sub-name':'The Sims 3: Showtime',
      'thumb-small':'./img/game-thumb_sims3-showtime-small.png',
      'sub-rating':'30'
    },{
      'sub-name':'The Sims 3: Seasons',
      'thumb-small':'./img/game-thumb_sims3-seasons-small.png',
      'sub-rating':'35'
    },{
      'sub-name':'The Sims 3: Pets',
      'thumb-small':'./img/game-thumb_sims3-pets-small.png',
      'sub-rating':'25'
    },{
      'sub-name':'The Sims 3: Latenight',
      'thumb-small':'./img/game-thumb_sims3-latenight-small.png',
      'sub-rating':'45'
    },{
      'sub-name':'The Sims 3: Supernatural',
      'thumb-small':'./img/game-thumb_sims3-supernatural-small.png',
      'sub-rating':'45'
    },{
      'sub-name':'The Sims 3: Generations',
      'thumb-small':'./img/game-thumb_sims3-generations-small.png',
      'sub-rating':'40'
    }]
  },{
  'name':'Minecraft &amp; Friends',
  'windows':'active',
  'esrb':'Teen',
  'genre':'Action',
  'osx':'active',
  'rating':'45',
  'rating-count':'2,914',
  'price':'14',
  'package-count':'10',
  'developer':'Various',
  'publisher':'NetGames',
  'serial':'Not Applicable',
  'games':[{
    'sub-name':'Hero Academy',
    'thumb-small':'./img/game-thumb_hero-academy-small.png',
    'sub-rating':'50'
    },{
    'sub-name':'Minecraft',
    'thumb-small':'./img/game-thumb_minecraft-small.png',
    'sub-rating':'40'
  },{
    'sub-name':'The Sims 2: University',
    'thumb-small':'./img/game-thumb_sims2-university-small.png',
    'sub-rating':'35'
  },{
    'sub-name':'The Sims 3: Generations',
    'thumb-small':'./img/game-thumb_sims3-generations-small.png',
    'sub-rating':'35'
  }]
}];

itemDB.trailers = [{
  'name':'Far Cry 3: The Story (UK)',
  'submitted':'2 hours Ago',
  'thumb':'far-cry-3',
  'time':'2:59',
  'resolution':'hidef',
  'rating':'45',
  'rating-count':'1,955'
},{
  'name':'Castle Story',
  'submitted':'2 hours Ago',
  'thumb':'castle-story',
  'time':'1:00',
  'resolution':'meddef',
  'rating':'45',
  'rating-count':'95'
},{
  'name':'Rayman Jungle Run',
  'submitted':'3 days ago',
  'thumb':'rayman',
  'time':'3:23',
  'resolution':'lowdef',
  'rating':'35',
  'rating-count':'198,428'
},{
  'name':'Call of Duty: Black Ops II',
  'submitted':'3 days ago',
  'thumb':'cod',
  'time':'2:53',
  'resolution':'hidef',
  'rating':'45',
  'rating-count':'1,198,428'
},{
  'name':'Bioshock: Infinite',
  'submitted':'3 days ago',
  'thumb':'bioshock',
  'time':'1:41',
  'resolution':'hidef',
  'rating':'50',
  'rating-count':'3,198,428'
}];

itemDB.highestSellers = [{
  'name':'Bioshock: Infinite'
}]

itemDB.css = {
  'directory':'./css/',
  'files':[
    'styles.css',
    'icons.css',
    'checkout.css',
    'popups.css',
    'header.css',
    'footer.css',
    'filter.css',
    'item-container.css',
    'stars.css',
    'trailers.css',
    'advertising.css'
  ]
}
itemDB.top10Sellers = [{
  'rank':'1',
  'thumb':'sims3',
  'name':'The Sims 3' ,
  'rating':'45'
},{
  'rank':'2',
  'thumb':'mario',
  'name':'New Super Mario Bros. U',
  'rating':'50'
},{
  'rank':'3',
  'thumb':'hero-academy',
  'name':'Hero Academy',
  'rating':'35'
},{
  'rank':'4',
  'thumb':'cod-black-ops-2',
  'name':'Call of Duty: Black Ops II',
  'rating':'40'
},{
  'rank':'5',
  'thumb':'super-meat-boy',
  'name':'Super Meat Boy',
  'rating':'45'
}]