import UserList from '../../pages/user-list';
import { screen } from '@testing-library/react';
import { renderWithRouterAndProvider } from '../helpers/render';
import userEvent from '@testing-library/user-event';

describe('Post list', () => {
   test('should contain title', () => {
      renderWithRouterAndProvider(<UserList />);
      expect(screen.getByText(/User list/i)).toBeInTheDocument();
   });

   test('input should contain text', () => {
      renderWithRouterAndProvider(<UserList />);
      const input = screen.getByPlaceholderText(/search by name or email/i) as HTMLInputElement;
      userEvent.type(input, 'maxime');
      expect(input.value).toEqual('maxime');
   });

   test('should match snapshot', async () => {
      renderWithRouterAndProvider(<UserList />);
      expect(screen.getByTestId('user-list-page')).toMatchSnapshot();
   });
});
