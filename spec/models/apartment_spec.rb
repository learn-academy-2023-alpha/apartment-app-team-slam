require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'is not valid without bedrooms' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end
  it 'is not valid without bathrooms' do
      apartment = Apartment.create bedrooms: 3, address: '123 forth st.', city: 'AAron', state: 'SC', square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
      expect(apartment.errors[:bathrooms]).to_not be_empty
  end
  it 'is not valid without address' do
    apartment = Apartment.create bathrooms: 1.5, bedrooms: 3, city: 'AAron', state: 'SC', square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:address]).to_not be_empty
  end
  it 'is not valid without city' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', bedrooms: 3, state: 'SC', square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:city]).to_not be_empty
  end
  it 'is not valid without state' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', bedrooms: 3, square_footage: 200, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:state]).to_not be_empty
  end
  it 'is not valid without square footage' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, price: 5000, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:square_footage]).to_not be_empty
  end
  it 'is not valid without price' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, square_footage: 200, utilities: "gas and electric", pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:price]).to_not be_empty
  end
  it 'is not valid without utilities' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, price: 5000, square_footage: 200, pets: true, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:utilities]).to_not be_empty
  end
  it 'is not valid without pets' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, price: 5000, utilities: "gas and electric", square_footage: 200, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors[:pets]).to_not be_empty
  end
  it 'is not valid without image' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, price: 5000, utilities: "gas and electric", pets: true, square_footage: 200
    expect(apartment.errors[:image]).to_not be_empty
  end

  it 'address must be unique' do
    apartment = Apartment.create bathrooms: 1.5, address: '123 forth st.', city: 'AAron', state: 'SC', bedrooms: 3, price: 5000, utilities: "gas and electric", pets: true, square_footage: 200, image: "k;ljal;jkhdlo;jkhvlb"
    expect(apartment.errors).to_not be_empty
  end
    

end
