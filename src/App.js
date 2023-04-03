import logo from './logo.svg';
import './App.css';

const toptitanarmor = [
  {id: 1, name: 'Synthoceps', description: 'Increased melee stats when surrounded by enemies', element: true },
  {id: 2, name: 'Heart of Inmost Light', description: 'Increased regeneration of abilities by 50%', element: false },
  {id: 3, name: 'Loreley Splendor Helm', description: 'When below critical health, a solar flame will spawn to start regeneration', element: true }
];

function TopList() {
  const threelist = toptitanarmor.map(titan =>
    <div>
        <h3
          key={titan.id}
          style={{
            color: titan.element ? 'red' : 'lightblue'
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

function Goodchoice() {
  alert("Thats a Great Choice! Some people will pick the other option and i'm glad you didnt. So yay!");
}

function Badchoice() {
  alert("Thats not really a great choice...Playing the game is loads of fun! I say take a look into it and see what you can do!")
}

function Decision() {
  return(
    <div>
      <h2>Do you like or dont like Destiny 2?</h2>
        <button className='like' onClick={Goodchoice}>Like</button>
        <button className='dislike' onClick={Badchoice}>Dislike</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Here are The Top Three Best Armor Pieces for Titans:
       <TopList />
       <div className="columns">
       <Information />
       <Decision />
       </div>
      </header>
    </div>
  );
}

export default App;
