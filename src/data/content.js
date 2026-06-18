import samura from '../assets/gifs/samura.gif'
import grad from '../assets/gifs/grad.gif'
import fall from '../assets/gifs/fall.gif'
import v1 from '../assets/gifs/v1.gif'
import mm from '../assets/gifs/mm.gif'
import nontok from '../assets/gifs/nontok.gif'
import summer from '../assets/gifs/summer.gif'


export const desktopIcons = [
  { id: 'about', label: 'about', iconKey: 'notes' },
  { id: 'experience', label: 'experience', iconKey: 'text_file' },
  { id: 'videos', label: 'videos', iconKey: 'pp_icon' },
  { id: 'corners', label: 'corners', iconKey: 'chrome_logo' },
];

// aspectRatio = width / height. Used as the initial value for the justified
// layout; the real ratio is measured from each media file once it loads.
export const videosContent = [
  {
    title: 'Samura',
    src: samura,
    aspectRatio: 1.25,
    url: 'https://www.instagram.com/p/DYgw36Lxlhh/',
  },
  {
    title: 'recollection',
    src: grad,
    aspectRatio: 1.25,
    url: 'https://www.youtube.com/watch?v=AIgIT8DoOSA',
  },
  {
    title: 'fall break',
    src: fall,
    aspectRatio: 1.667,
    url: 'https://www.youtube.com/@enternal0070/',
  },
  {
    title: 'v1',
    src: v1,
    aspectRatio: 1.667,
    url: 'https://www.instagram.com/p/DOOg8OzEXT4/'
  },
  {
    title: 'summer',
    src: summer,
    aspectRatio: 1.25,
    url: 'https://www.instagram.com/p/DOOg8OzEXT4/'
  },
  {
    title: 'mm',
    src: mm,
    aspectRatio: 1.667,
    url: 'https://www.instagram.com/p/DOOg8OzEXT4/'
  },
  {
    title: 'nontok',
    src: nontok,
    aspectRatio: 1.25,
    url: 'https://www.instagram.com/p/DOOg8OzEXT4/'
  }
];

export const cornersLinks = [
  {
    id: 'imgflip',
    title: 'imgflip.com',
    note: "I started making memes on here",
    url: 'https://imgflip.com',
  },
  {
    id: 'myinstants',
    title: 'www.myinstants.com',
    note: "make some noise",
    url: 'https://www.myinstants.com/en/index/us/',
  },
  {
    id: 'v1michigan',
    title: 'v1michigan.com',
    note: "a community of passionate people at michigan",
    url: 'https://v1michigan.com/',
  },
  {
    id: 'webring',
    title: 'michigan-webring.vercel.app',
    note: "a webring trivialized by a friend",
    url: 'https://michigan-webring.vercel.app/',
  },
  {
    id: 'jujutsufolk',
    title: 'reddit.com/r/Jujutsufolk/',
    note: 'I was there at its peak',
    url: 'https://www.reddit.com/r/Jujutsufolk/',
  },
  {
    id: 'almarts27',
    title: 'instagram.com/almarts27',
    note: 'bullish on this account',
    url: 'https://www.instagram.com/almarts27/',
  },
  {
    id: 'graveso',
    title: 'instagram.com/graveso',
    note: 'also bullish on this',
    url: 'https://www.instagram.com/graveso_/',
  },
  {
    id: 'gavinzbeats',
    title: 'youtube.com/@GavinZBeats',
    note: 'aspiring musical artist',
    url: 'https://www.youtube.com/@GavinZBeats',
  },
];