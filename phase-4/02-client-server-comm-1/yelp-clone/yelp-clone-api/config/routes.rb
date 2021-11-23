Rails.application.routes.draw do
  resources :businesses, only: [:index, :show]
end
