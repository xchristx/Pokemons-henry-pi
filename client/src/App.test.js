import { render, screen } from '@testing-library/react';
import { Pokedex } from './pokemon/pages/Pokedex';


test('renders learn react link', () => {
  render(<Pokedex />);
  const linkElement = screen.getByText(/pokedex/gi);
  expect(linkElement).toBeInTheDocument();
});
