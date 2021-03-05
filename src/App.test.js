import { render, screen } from '@testing-library/react';
import TraderInfo from './components/traderInfo';

test('renders learn react link', () => {
  render(<TraderInfo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
