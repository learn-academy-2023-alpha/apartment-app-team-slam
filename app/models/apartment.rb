class Apartment < ApplicationRecord
    belongs_to :user
    validates :bedrooms, :bathrooms, :city, :state, :sqaure_footage,  :address, :utilities, :pets, :price, :image, presence: true
    validates :address, uniqueness: true
end
