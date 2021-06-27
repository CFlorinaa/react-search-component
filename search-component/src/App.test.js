import { render, screen } from '@testing-library/react';
import ExampleSearch from './ExampleSearch';

test('renders learn react link', () => {
  render(<ExampleSearch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
