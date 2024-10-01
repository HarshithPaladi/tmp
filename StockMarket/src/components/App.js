import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';
import { StockList } from './StockList';

/**
 * The main App component that serves as the root component for the Stock Market application.
 * It includes the Navbar, StockList, and Portfolio components arranged in a flexible layout.
 */
function App() {
  return (
    <div className="flex-column gap-3">
      {/* Navbar component for navigation */}
      <Navbar />
      <div className="flex-row gap-2 flex-wrap">
        {/* StockList component to display the list of stocks */}
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <StockList />
        </div>
        {/* Portfolio component to display the user's portfolio */}
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;