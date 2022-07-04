import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store  from '../../store/store';
import RetailerComponents from './RetailerComponents';

test('renders wholesaleshop name from redux store', () => {
    // Arrange
    render(
      <Provider store={store}>
        <RetailerComponents />
      </Provider>
    );
  
    store.getState().retailers.retailerList.forEach((retailer)=>{
      const retailerName = screen.getByText(retailer.retailerName);
      expect(retailerName).toBeInTheDocument();
    
    });

  
  
  });


