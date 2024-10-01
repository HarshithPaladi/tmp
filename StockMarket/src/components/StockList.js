import { StockListItem } from './StockListItem'; // Importing the StockListItem component
import { useSelector } from 'react-redux'; // Importing the useSelector hook from react-redux to access the Redux store

/**
 * StockList Component
 * This component is responsible for rendering a list of stocks.
 * It uses the useSelector hook to access the stocks from the Redux store.
 * Each stock is rendered using the StockListItem component.
 */
export const StockList = () => {

  // Accessing the stocks from the Redux store
  const stocks = useSelector(state => state.stocks);

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {/* Mapping through the stocks array and rendering a StockListItem for each stock */}
        {stocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};