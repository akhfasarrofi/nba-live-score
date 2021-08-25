import { bucks,
  suns,
  hawks,
  clippers,
  ers,
  boston,
  brooklyn,
  knicks,
  toronto,
  cavaliers,
  chicago,
  detroit,
  indiana,
  denver,
  minnesota,
  portland,
  thunder,
  utah,
  lakers,
  kings,
  warriors,
  hornest,
  miami,
  washington,
  magic,
  maueriks,
  memphis,
  spurs,
  houston,
  neworleans,
  thumnailnews } from './assets/images';

const matchVideo = {
  title: 'NBA Finals 2021 Live Streaming: Phoenix Suns vs Milwaukee Bucks',
  urlVideo: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  time: 'Today, Thursday, July 22 9:00 PM',
};

const match = [
  {
    id: 1,
    nameleft: 'Bucks',
    nameright: 'Suns',
    logoleft: bucks,
    logoright: suns,
    scoreleft: '',
    scoreright: '',
    drawing: '2nd QUARTERS',
    time: '04:58',
    finish: false,
  },
  {
    id: 2,
    nameleft: 'Bucks',
    nameright: 'Hawks',
    logoleft: bucks,
    logoright: hawks,
    scoreleft: '118',
    scoreright: '107',
    drawing: 'Game 6: MIL wins series 4-2',
    time: 'Final',
    finish: true,
  },
  {
    id: 3,
    nameleft: 'Clippers',
    nameright: 'Suns',
    logoleft: clippers,
    logoright: suns,
    scoreleft: '103',
    scoreright: '130',
    drawing: 'Game 6: PHX wins series 4-2',
    time: 'Final',
    finish: true,
  },
  {
    id: 4,
    nameleft: 'Hawks',
    nameright: '76ers',
    logoleft: hawks,
    logoright: ers,
    scoreleft: '103',
    scoreright: '96',
    drawing: 'Game 7: ALT wins series 4-3',
    time: 'Final',
    finish: true,
  },
];

const allteams = [
  {
    id: 1,
    region: 'ATLANTIC',
    logo: [boston, brooklyn, knicks, ers, toronto],
  },
  {
    id: 2,
    region: 'CENTRAL',
    logo: [bucks, cavaliers, chicago, detroit, indiana],
  },
  {
    id: 3,
    region: 'NORTHWEST',
    logo: [denver, minnesota, portland, thunder, utah],
  },
  {
    id: 4,
    region: 'PACIFIC',
    logo: [warriors, clippers, lakers, suns, kings],
  },
  {
    id: 5,
    region: 'SOUTHEAST',
    logo: [hawks, hornest, miami, washington, magic],
  },
  {
    id: 6,
    region: 'SOUTHWEAST',
    logo: [maueriks, neworleans, memphis, spurs, houston],
  },
];

const newsthumnail = {
  image: thumnailnews,
  title: 'USA upset by France in Olympics opener',
  content:
        'Led by 28 points from Evan Fournier, France finishes on a 16-2 run as Team USA suffers its first Olympic loss in nearly 20 years.',
};

const stats = [
  {
    id: 1,
    region: 'Atlantic Division',
    team: [
      {
        idTeam: 1,
        logo: bucks,
        wins: 0.681,
        home: ' 29 - 7',
        road: '20 - 16',
        streak: 'W 2',
      },
      {
        idTeam: 2,
        logo: suns,
        wins: 0.667,
        home: '28 - 8',
        road: '20 - 16',
        streak: 'W 5',
      },
      {
        idTeam: 3,
        logo: hawks,
        wins: 0.569,
        home: '25 - 1',
        road: '16 - 20',
        streak: 'W 3',
      },
      {
        idTeam: 4,
        logo: clippers,
        wins: 0.5,
        home: '21 - 15',
        road: '15 - 21',
        streak: 'L 1',
      },
      {
        idTeam: 5,
        logo: ers,
        wins: 0.375,
        home: '16 - 20',
        road: '11 - 25',
        streak: 'L 7',
      },
    ],
  },

  {
    id: 2,
    region: 'Central Division',
    team: [
      {
        idTeam: 1,
        logo: boston,
        wins: 0.639,
        home: ' 26 - 10',
        road: '20 - 16',
        streak: 'L 1',
      },
      {
        idTeam: 2,
        logo: brooklyn,
        wins: 0.667,
        home: '35 - 8',
        road: '20 - 16',
        streak: 'L 5',
      },
      {
        idTeam: 3,
        logo: knicks,
        wins: 0.569,
        home: '82 - 76',
        road: '24 - 20',
        streak: 'W 3',
      },
      {
        idTeam: 4,
        logo: toronto,
        wins: 0.525,
        home: '24 - 64',
        road: '32 - 78',
        streak: 'L 12',
      },
      {
        idTeam: 5,
        logo: cavaliers,
        wins: 0.124,
        home: '16 - 20',
        road: '11 - 25',
        streak: 'L 7',
      },
    ],
  },
];

export {
  matchVideo, match, allteams, newsthumnail, stats,
};
