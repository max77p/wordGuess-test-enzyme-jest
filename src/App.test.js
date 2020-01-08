import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

it('renders without crashing',()=>{
  
})