import { render, screen } from "@testing-library/react";
import ApartmentShow from "./ApartmentShow.js";
import { BrowserRouter, useParams } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import { isEqual } from "@rails/webpacker/package/utils/helpers.js";

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    let { id } = 1;

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
    ];
    const currentApartment = apartments?.find(
      (apartment) => apartment.id === +id
    );
    render(
      <BrowserRouter>
        <ApartmentShow apartments={apartments} />
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {});

  it("displays text current listings", () => {
    expect("Listing Info:").toBeInTheDocument;
  });
});
