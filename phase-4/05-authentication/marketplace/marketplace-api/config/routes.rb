Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :categories, only: [:index, :show]
end
