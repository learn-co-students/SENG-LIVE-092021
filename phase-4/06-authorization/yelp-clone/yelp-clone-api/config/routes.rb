Rails.application.routes.draw do
  resources :businesses, only: [:index, :show, :create]
  resources :users, only: [:create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
end
