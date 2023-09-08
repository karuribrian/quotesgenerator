const quotes = [
    {
      quote: '"Hustlers don\'t sleep, we rest one eye at a time."',
      person: 'Unknown',
    },
    {
      quote: '"I don\'t sleep cause sleep is the cousin of death"',
      person: 'Nas',
    },
    {
      quote:
        '"Instead of trying to build a brick wall, lay a brick every day. Eventually, you\'ll look up and you\'ll have a brick wall."',
      person: 'Nipsey Hussle',
    },
    {
      quote:
        '"The company you keep has a large influence on the situations you bring to yourself. So, always be aware of the people you are around and the energy they bring."',
      person: 'Nipsey Hussle',
    },
    {
      quote: '"Today\'s accomplishments were yesterday\'s impossibilities"',
      person: 'Robert H. Schuller',
    },
    {
      quote:
        '"I learned to get through the bad times and embrace the good ones, to face my fears and overcome them, to appreciate life for all its struggles and triumphs. I\'m just a product of my environment, and I\'m determined to rise above it all."',
      person: 'Llyod Banks',
    },
    {
      quote:
        '"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."',
      person: 'Marie Curie',
    },
    {
      quote:
        "\"I'm trying to do something that's unorthodox, and I know it's unorthodox. I want to be something different.\"",
      person: 'Lil wayne',
    },
    {
      quote: '"Get rich or die tryin\'."',
      person: '50 Cent',
    },
    {
      quote:
        "\"I don't really like talking. I like to execute. I'm not a talking person. I'm an action person.\"",
      person: 'Kevin Gates',
    },
    {
      quote: '"If you tell the truth, you don\'t have to remember anything."',
      person: 'Mark Twain',
    },
    {
      quote:
        '"I am the Way, the Truth, and the Life. No one comes to the Father except through me."',
      person: 'Jesus Christ',
    },
    {
      quote: 'Prison was the best thing that ever happened to me.',
      person: 'Kevin Gates',
    },
    {
      quote:
        '"Until you spread your wings, you’ll have no idea how far you can fly."',
      person: 'Napoleon Hill',
    },
    {
      quote:
        'Nothing is more difficult, and therefore more precious, than to be able to decide.',
      person: 'Napoleon Hill',
    },
    {
      quote:
        '“Everyone can perform magic, everyone can reach his goals, if he is able to think, if he is able to wait, if he is able to fast.”',
      person: ' Hermann Hesse, Siddhartha ',
    },
    {
      quote:
        ' “Fasting is a separation from many things in order to give deliberate and total attention to prayer.” ',
      person: ' Benjamin Suulola',
    },
    {
      quote: '“I am a hard person to love but when I love, I love really hard.” ',
      person: 'Tupac',
    },
    {
      quote: '“Reality is wrong. Dreams are for real.”',
      person: 'Tupac',
    },
    {
      quote: '"I’m 97% sure you don’t like me. But I’m 100% sure I don’t care."',
      person: 'Unknown',
    },
    {
      quote: '"You need more than guts to be a good gangster. You need ideas.”',
      person: 'Rocket, City of God',
    },
    {
      quote: '“New love is so beautiful, and time just makes it ugly.”',
      person: 'Unknown',
    },
    {
      quote:
        ' “Fasting is a practise that frees us from the chains of this world, allowing us to hunger more freely.for God.”',
      person: ' Allene vanOirschot',
    },
    {
      quote: '"Once a gangster, always a gangster."',
      person: 'Gary Glasberg',
    },
    {
      quote:
        '"Waste no more time arguing about what a good man should be. Be one."',
      person: 'Marcus Aurelius',
    },
    {
      quote:
        '"I am an undisputed gangster. To me, that means playing by my own rules."',
      person: 'Katherine Ryan',
    },
  ];
  
  // for (let i = 0; i < quotes.length; i++) {}
  
  function generate() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    let quote = quotes[random];
    document.querySelector('.quote').innerHTML = quote.quote;
    document.querySelector('.person').innerHTML = quote.person;
    console.log(quote);
  }
  let btn = document.getElementsByClassName('btn')[0];
  
  btn.addEventListener('click', generate);
  