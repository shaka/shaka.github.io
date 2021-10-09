import './App.css';
import JobCard from './JobCard'

const experience = [
  { 
    title: 'MoveOn.org 2017-2019', 
    description: 'Full stack engineer focused on mobile campaigning. Work included being project lead for Spoke, an open source peer to peer texting tool',
    links: ['https://github.com/moveonorg/spoke']
  },
  {
   title: 'UpTogether 2019-2021',
  description: 'Full stack engineer supporting communities, government agencies and philanthropists to distribute cash transfers and spark social capital exchange.',
  links: ['https://uptogether.org'],
  },
  {
    title: 'The New York Times 2021-present',
   description: 'Software engineer working on NYT Games including NYT Crossword Puzzle, Spelling Bee, etc.',
   links: [],
   },
]

function App() {
  return (
    <div className="App dark:bg-black dark:text-white" >
      <header className="App-header">
        <h1 className="text-3xl">Shaka Clark</h1>
        <p>Social Justice Oriented Software Engineer</p>
        <hr />
        { experience.map(el => {
          return (<JobCard job={el} key={el.title} />)
        })}
      </header>
    </div>
  );
}

export default App;
