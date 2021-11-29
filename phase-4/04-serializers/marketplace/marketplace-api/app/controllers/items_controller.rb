class ItemsController < ApplicationController

    def index
        items = Item.where(sold: false)
        render json: items, except: [:created_at, :updated_at]
    end

    def show 
        item = Item.find_by(id: params[:id])
        if item 
            render json: item 
        else 
            render json: { error: "Item does not exist" }, status: :not_found
        end
    end

    def create 
        item = current_user.sold_items.create(item_params)
        if item.valid? 
            render json: item, status: :created 
        else 
            render json: { error: item.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :ok
    end

private 

def item_params
    params.permit(:name, :desc, :price)
end 

end
