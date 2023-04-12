user1 = User.where(email: "Manny@awesomeness.com").first_or_create(password: "Password123", password_confirmation: "Password123")

user2 = User.where(email: "Simon@awesomeness.com").first_or_create(password: "Password123", password_confirmation: "Password123")

user1_apartment = [{
    bathrooms: 1.5,
    address: '123 forth st.',
    city: 'AAron',
    state: 'SC',
    bedrooms: 3,
    price: 5000,
    utilities: "gas and electric",
    pets: true,
    sqaure_footage: 200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
},

{
    bathrooms: 2,
    address: '124 forth st.',
    city: 'AAron',
    state: 'SC',
    bedrooms: 3,
    price: 5560,
    utilities: "gas and electric",
    pets: true,
    sqaure_footage: 210,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}
] 

user1_apartment = [{
    bathrooms: 1.5,
    address: '123 forth st.',
    city: 'AAron',
    state: 'SC',
    bedrooms: 3,
    price: 5000,
    utilities: "gas and electric",
    pets: true,
    sqaure_footage: 200,
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},

{
    bathrooms: 2,
    address: '124 forth st.',
    city: 'AAron',
    state: 'SC',
    bedrooms: 3,
    price: 5560,
    utilities: "gas and electric",
    pets: true,
    sqaure_footage: 210,
    image: "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}
] 




