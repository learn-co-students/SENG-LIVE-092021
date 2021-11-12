class ToppingsController < ApplicationController
    
    get '/toppings' do 
        toppings = Topping.all 
        toppings.to_json 
    end
    
    get '/toppings/:id' do 
        topping = Topping.find_by_id(params[:id])
        topping.to_json
    end


end