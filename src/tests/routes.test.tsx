import { screen } from '@testing-library/react';
import App from '../App';
import { store } from '../store';
import { renderWithRouterAndProvider } from './helpers/render';

describe('Router test', () => {
   test('post list page should be in the document', () => {
      renderWithRouterAndProvider(<App />, ['/'], store);
      expect(screen.getByTestId('post-list-page')).toBeInTheDocument();
   });

   test('info page should be in the document', () => {
      renderWithRouterAndProvider(<App />, ['/info/23233'], store);
      expect(screen.getByTestId('post-info-page')).toBeInTheDocument();
   });

   test('user list page should be in the document', () => {
      renderWithRouterAndProvider(<App />, ['/users'], store);
      expect(screen.getByTestId('user-list-page')).toBeInTheDocument();
   });
});
