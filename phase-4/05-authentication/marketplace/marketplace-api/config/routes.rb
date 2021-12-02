Rails.application.routes.draw do

  resources :items, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :create, :destroy]
  resources :categories, only: [:index, :show]

  get '/me', to: "users#show"

  # login what type of http verb are we using and why

  post '/login', to: "sessions#create"
  # logout 
  delete '/logout', to: "sessions#destroy"
end
