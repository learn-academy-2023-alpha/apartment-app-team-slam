import { render, screen } from "@testing-library/react";
import ApartmentIndex from "./ApartmentIndex.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import { isEqual } from "@rails/webpacker/package/utils/helpers.js";

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
    };

    const apartments = [
      {
        bathrooms: 1.5,
        address: "123 forth st.",
        city: "AAron",
        state: "SC",
        bedrooms: 3,
        price: 5000,
        utilities: "gas and electric",
        pets: true,
        square_footage: 200,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },

      {
        bathrooms: 2,
        address: "124 forth st.",
        city: "AAron",
        state: "SC",
        bedrooms: 3,
        price: 5560,
        utilities: "gas and electric",
        pets: true,
        square_footage: 210,
        image:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ];

    render(
      <BrowserRouter>
        <ApartmentIndex apartments={apartments} />
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {});

  it("displays text current listings", () => {
    expect("Current Listings").toBeInTheDocument;
  });

  it("displays a listing of apartments from the database", () => {
    screen.logTestingPlaygroundURL();
    expect(
      container.querySelector(
        "#sandbox > div > div > div:nth-child(1) > div > button"
      )
    ).toBeInTheDocument;
  });
});
