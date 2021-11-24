Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update]
  resources :users, only: [:create, :destroy]
end
