class ItemsController < ApplicationController


    # add the ability to return a response of all items 
    # index action

    def index
        # retreive all items 
        items = Item.all
        # return as JSON
        render json: items, except: [:created_at, :updated_at]
    end


    # add an ability to return a response of a single item 
    # show action

    def show 
        item = Item.find_by(id: params[:id])
        if item 
            render json: item 
        else 
            render json: { error: "Item does not exist" }, status: :not_found
        end
    end
end
