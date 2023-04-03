import { useState } from 'react';
import { supabase } from './supabaseClient';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

function MyLibrary() {
  const [topBooks, setTopBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    setTopBooks(books);
  }

  const [vote, setVote] = useState(0);
  function voteCount() {
      setVote(vote + 1)
  }

  getBooks();
  return (
    <>
    <table className='container'>
      <th className='pretitle'>Rank</th>
      <th className='title1'>Title & Author</th>
      <th className='title2'>ISBN</th>
      <th className='title3'>Description</th>
    {
      topBooks.map(t =>(
        <>
        <tr className='firstTableR'>
          <td className='prefirst'>{t.id}</td>
          <td className='first'>{t.title}, written by: {t.author}</td>
          <td className='second'>Associated Identifiable Number: {t.isbn}</td>
          <td className='third'>A brief description: {t.description}</td>
        </tr>
        </>
      ))
    }
    </table>
    <tr>
      <td className='buttonRow'>If you Agree with this ranking, vote here! <button onClick={voteCount}># of votes: {vote}</button></td>
    </tr>
    </>
  );
}

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
       <MyLibrary />
      </header>
    </div>
  );
}

export default App;
