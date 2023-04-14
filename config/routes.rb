Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  root 'home#index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
