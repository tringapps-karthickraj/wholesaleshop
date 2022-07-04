import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store  from '../../store/store';

import HeaderComponent from './HeaderComponent';

test('renders wholesaleshop name from redux store', () => {
  render(
    <Provider store={store}>
      <HeaderComponent />
    </Provider>
  );

  
  const linkElement = screen.getByText(/KR-MART/i);
  expect(linkElement).toBeInTheDocument();


});


test("check Retailer Details",()=>{
    render(
        <Provider store = {store}>
            <HeaderComponent/>
        </Provider>
    );

    store.getState().retailers.retailerList.forEach((retailer)=>{
        const retailerName = screen.getByText(retailer.retailerName);
        fireEvent.click(retailerName)

    })
})