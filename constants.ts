// FIX: Import Product type to be used in PRODUCTS constant.
import { Video, Game, Product, Rhyme } from './types';
import { PaintBrushIcon, PawIcon, HomeIcon } from './components/icons/CategoryIcons';

export const VIDEO_CATEGORIES: Video['category'][] = ['Rhymes', 'Learning', 'Stories'];

export const GAMES: Game[] = [
    { id: 1, title: 'Coloring Book', icon: PaintBrushIcon, color: 'bg-purple-300', path: '/games/coloring' },
    { id: 2, title: 'Animal Coloring', icon: PawIcon, color: 'bg-orange-300', path: '/games/animals' },
    { id: 3, title: 'House Coloring', icon: HomeIcon, color: 'bg-green-300', path: '/games/houses' },
];

// FIX: Add PRODUCTS constant to fix import error in pages/Shop.tsx.
export const PRODUCTS: Product[] = [
  {
    id: 3,
    name: 'Kids Tube T-Shirt',
    description: 'Show your love for Kids Tube with this super-soft cotton t-shirt.',
    price: '₹399',
    imageUrl: 'https://share.google/images/UWJm1xVb88iivqnhj'
  },
  {
    id: 4,
    name: 'Kids Tube Water Bottle',
    description: 'Stay hydrated with this fun and colorful water bottle.',
    price: '₹299',
    imageUrl: 'https://i.imgur.com/sT25lBq.png'
  },
  {
    id: 5,
    name: 'Kids Tube Lunch Box',
    description: 'Make lunchtime exciting with this durable and cute lunch box.',
    price: '₹149',
    imageUrl: 'https://i.imgur.com/L1ZzPQp.png'
  },
  {
    id: 6,
    name: 'Kids Tube Mug',
    description: 'A perfect mug for your morning milk or hot chocolate.',
    price: '₹149',
    imageUrl: 'https://i.imgur.com/tHqgE5w.png'
  },
  {
    id: 1,
    name: 'Singing Star Plushie',
    description: 'A cute, cuddly plushie that sings our most popular rhymes!',
    price: '₹999',
    imageUrl: 'https://i.imgur.com/z4g9jYk.png'
  },
  {
    id: 2,
    name: 'Colorful ABC Blocks',
    description: 'Learn the alphabet with these fun and vibrant wooden blocks.',
    price: '₹299',
    imageUrl: 'https://i.imgur.com/p8b7g5E.png'
  }
];

export const RHYMES: Rhyme[] = [
  {
    id: 'twinkle-twinkle',
    title: 'Twinkle, Twinkle, Little Star',
    imageUrl: 'https://picsum.photos/seed/star/500/500',
    lyrics: `Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.

When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.

Then the trav'ller in the dark,
Thanks you for your tiny spark,
He could not see which way to go,
If you did not twinkle so.`
  },
  {
    id: 'wheels-on-the-bus',
    title: 'The Wheels on the Bus',
    imageUrl: 'https://picsum.photos/seed/bus/500/500',
    lyrics: `The wheels on the bus go round and round,
Round and round, round and round.
The wheels on the bus go round and round,
All through the town.

The wipers on the bus go Swish, swish, swish;
Swish, swish, swish; swish, swish, swish.
The wipers on the bus go Swish, swish, swish,
All through the town.

The horn on the bus goes Beep, beep, beep;
Beep, beep, beep; beep, beep, beep.
The horn on the bus goes Beep, beep, beep,
All through the town.`
  },
  {
    id: 'old-macdonald',
    title: 'Old MacDonald Had A Farm',
    imageUrl: 'https://picsum.photos/seed/farm/500/500',
    lyrics: `Old MacDonald had a farm,
E-I-E-I-O!
And on his farm he had a cow,
E-I-E-I-O!
With a moo-moo here and a moo-moo there,
Here a moo, there a moo,
Everywhere a moo-moo.
Old MacDonald had a farm,
E-I-E-I-O!

Old MacDonald had a farm,
E-I-E-I-O!
And on his farm he had a pig,
E-I-E-I-O!
With an oink-oink here and an oink-oink there,
Here an oink, there an oink,
Everywhere an oink-oink.`
  },
  {
    id: 'baa-baa-black-sheep',
    title: 'Baa, Baa, Black Sheep',
    imageUrl: 'https://picsum.photos/seed/sheep/500/500',
    lyrics: `Baa, baa, black sheep,
Have you any wool?
Yes sir, yes sir,
Three bags full.

One for the master,
And one for the dame,
And one for the little boy
Who lives down the lane.`
  },
  {
    id: 'itsy-bitsy-spider',
    title: 'Itsy Bitsy Spider',
    imageUrl: 'https://picsum.photos/seed/spider/500/500',
    lyrics: `The itsy bitsy spider
Climbed up the waterspout.
Down came the rain
And washed the spider out.

Out came the sun
And dried up all the rain.
And the itsy bitsy spider
Climbed up the spout again.`
  },
  {
    id: 'humpty-dumpty',
    title: 'Humpty Dumpty',
    imageUrl: 'https://picsum.photos/seed/egg/500/500',
    lyrics: `Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall.
All the king's horses and all the king's men
Couldn't put Humpty together again.`
  }
];