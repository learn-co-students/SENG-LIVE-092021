Rails.application.routes.draw do
  resources :businesses, only: [:index, :show, :create]
  resources :users, only: [:create, :show] # this is being used for signup
  resources :reviews, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: "sessions#create"

  get '/account', to: "users#show"
  delete '/logout', to: "sessions#destroy"
  
end
