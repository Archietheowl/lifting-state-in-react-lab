// src/App.jsx

//!---Imports
import IngredientList from './components/IngredientList.jsx';
import BurgetStack from './components/BurgerStack.jsx';
import './App.css';

//!--- Data 
//See Exports bellow

const App = () => {
    //!---Construct States
    const [stack, setStack] = useState([{}]);
    

    //!---Construct Handlers



    //!--- Any other functions



    //!--- Render content
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredient={ingredient}/>
        <BurgetStack/>
      </section>
    </main>
  );
};

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

export default App;
