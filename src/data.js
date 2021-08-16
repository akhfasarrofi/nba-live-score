import bucks from './icon/bucks.png';
import suns from './icon/suns.png';
import hawks from './icon/hawks.png';
import clippers from './icon/clippers.png';
import ers from './icon/76ers.png';

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
    id: 3,
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

export { matchVideo, match };
