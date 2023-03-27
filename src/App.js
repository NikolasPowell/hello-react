// import logo from './logo.svg';
import './App.css';

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
