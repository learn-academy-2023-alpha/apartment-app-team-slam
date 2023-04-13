import { render,screen} from '@testing-library/react';
import Footer from './Footer.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';

describe("<Footer />", () => {
  // Create a function to render the Footer
  const renderFooter = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  }

  it('Renders without crashing', () => {
    renderFooter()
  })

    expect('Team SLAM').toBeInTheDocument
  })
