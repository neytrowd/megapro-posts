import PostList from '../../pages/post-list';
import { screen } from '@testing-library/react';
import { renderWithRouterAndProvider } from '../helpers/render';

describe('Post list', () => {
   test('should contain title', () => {
      renderWithRouterAndProvider(<PostList />);
      expect(screen.getByText(/Post list/i)).toBeInTheDocument();
   });

   test('should match snapshot', async () => {
      renderWithRouterAndProvider(<PostList />);
      expect(screen.getByTestId('post-list-page')).toMatchSnapshot();
   });
});
