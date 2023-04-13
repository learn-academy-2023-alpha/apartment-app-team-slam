import { render,screen} from '@testing-library/react';
import Navigation from './Navigation.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';

describe("<Navigation />", () => {
  // Create a function to render the Navigation
  const renderNavigation = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderNavigation()
  })

  it('displays text listings', () => {
    renderNavigation()

    expect('listings').toBeInTheDocument
  })

})