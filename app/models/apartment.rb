class Apartment < ApplicationRecord
    belongs_to :user
    validates :bedrooms, :bathrooms, :city, :state, :square_footage,  :address, :utilities, :pets, :price, :image, :user_id, presence: true
    validates :address, uniqueness: true
end
