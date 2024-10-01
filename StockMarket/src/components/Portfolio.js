import { useSelector } from "react-redux";
import { PortfolioItem } from "./PortfolioItem";

// Portfolio component to display user's stock portfolio and calculate net worth
export const Portfolio = () => {

  // Retrieve the portfolio from the Redux store
  const portfolio = useSelector(state => state.user.portfolio);

  // Function to calculate the net worth of the portfolio
  const calculateNetworth = () => {
    // Reduce the portfolio array to a single value representing the total net worth
    return portfolio.reduce((acc, stock) => {
      // Accumulate the total value by multiplying stock quantity by its price
      return acc + (stock.quantity * stock.price);
    }, 0).toFixed(2); // Fix the result to 2 decimal places
  };

  return (
    <div className="flex-column gap-1">
      <h2>
        <span>Portfolio</span>
        {/* Display net worth if the portfolio is not empty */}
        { portfolio.length > 0 && <span> - Networth: {calculateNetworth()}</span> }
      </h2>

      <ul className="flex-column gap-1">
        {/* Map through the portfolio and render a PortfolioItem for each stock */}
        {portfolio.map((stock) => (
          <PortfolioItem key={stock.id} stock={stock}>
          </PortfolioItem>
        ))}
      </ul>
    </div>
  );
};
