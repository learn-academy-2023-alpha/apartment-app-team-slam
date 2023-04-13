import { render,screen} from '@testing-library/react';
import Home from './Home.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';

describe("<Home />", () => {
  // Create a function to render the Home
  const renderHome = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderHome()
  })

  it('displays text home', () => {
    renderHome()

    expect('home').toBeInTheDocument
  })

})