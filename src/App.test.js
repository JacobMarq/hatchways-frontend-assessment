import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders Student Container Component', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.getElement('studentContainer')).toBeTruthy();
});
