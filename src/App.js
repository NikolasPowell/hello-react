// import logo from './logo.svg';
import './App.css';

/*
const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: logo,
  width: '264',
  height: '378'
};
*/

/*
function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}
*/

/*
const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];
*/

/*
function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}
*/

/*
function MagicButton() {
  return (
    <> 
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </>
  );
}
*/

const toptitanarmor = [
  {id: 1, name: 'Synthoceps', description: 'Increased melee stats when surrounded by enemies', melee: true },
  {id: 2, name: 'Heart of Inmost Light', description: 'Increased regeneration of abilities by 50%', melee: false },
  {id: 3, name: 'Loreley Splendor Helm', description: 'When below critical health, a solar flame will spawn to start regeneration', melee: false }
];

function TopList() {
  const threelist = toptitanarmor.map(titan =>
    <div>
    <h3
    key={titan.id}
    style={{
      color: titan.melee ? 'blue' : 'red'
    }}
    >
      <h2>{titan.name}</h2>
    </h3>
      <p>{titan.description}</p>
    </div>
  );
  return(
    <h3>{threelist}</h3>
  )
}

const company = {
  name: 'Bungie',
  established: 'Founded in 1991',
  game: 'Destiny 2',
  // Image gotten from Creative Common Licenses on Flickr
  image: 'bungie.jpg',
};

function Information() {
  return(
    <div>
      <h1>{company.name}, {company.established}</h1>
      <h3>{company.game}</h3>
      {company.image &&
      <img 
        className='Destiny Logo'
        src={company.image}
        alt={company.game}
        style={{
          width: 500,
          height: 300
        }}
      />
      }
    </div>
  );
}

function Decision() {
  return(
    <div>
      <h2>Do you like or dont like Destiny 2?</h2>
      <view>
        <button>Like</button>
      </view>
      <button>Dislike</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Here are The Top Three Best Armor Pieces for Titans:
       <TopList />
       <Information />
       <Decision />
      </header>
    </div>
  );
}

export default App;
