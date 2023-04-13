require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  
  let (:user) {User.create email: "test@testing.com", password: "test123", password_confirmation: "test123"}
  describe "GET /index" do
    it "list of apartments" do
      user.apartments.create(bedrooms: 3, bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb")

      get '/apartments'
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1 
    end
  end
end
