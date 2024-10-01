import { useSelector } from "react-redux";

// Navbar component for the Stock Market application
export const Navbar = () => {

  // Retrieve the user's funds from the Redux store
  const funds = useSelector(state => state.user.funds);

  return (
    // Navigation bar with flexbox layout for spacing
    <nav className="flex-row flex-space-between">
      {/* Application title */}
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      {/* Display the user's balance, formatted to 2 decimal places */}
      <h1>Balance: {funds.toFixed(2)}</h1>
    </nav>
  );
};