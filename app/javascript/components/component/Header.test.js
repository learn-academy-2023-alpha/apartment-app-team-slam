import { render,screen} from '@testing-library/react';
import Header from './Header.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';

describe("<Header />", () => {
  // Create a function to render the Header
  const renderHeader = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  }

  it('Renders without crashing', () => {
    renderHeader()
  })

})
