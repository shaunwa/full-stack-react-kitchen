import PersistentForm from './PersistentForm';
import usePersistentState from './usePersistentState';
import Chat from './Chat';
import ShoppingCart from './ShoppingCart';
import Onboarding from './Onboarding';
import './App.css';

function App() {
  const [numberOfClicks, setNumberOfClicks] = usePersistentState(
    'numberOfClicks',
    0,
  );

  return (
    <Onboarding onComplete={data => alert('Complete! ' + data)}>
      <div>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
      </div>
      <div>
        <input placeholder='Favorite Food'></input>
        <input placeholder='Favorite Place'></input>
      </div>
      <div>
        <input placeholder='Do you have any pets?'></input>
        <input placeholder='What do you do for work?'></input>
      </div>
    </Onboarding>
  );

  // return (
  //   <>
  //     <h1>You've clicked the button {numberOfClicks} times</h1>
  //     <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>Increment</button>
  //     <button onClick={() => setNumberOfClicks(0)}>Reset Count</button>

  //     <PersistentForm />
  //   </>
  // );
}

export default App;
