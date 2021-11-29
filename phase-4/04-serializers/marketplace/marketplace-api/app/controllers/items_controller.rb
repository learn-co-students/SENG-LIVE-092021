class ItemsController < ApplicationController

    def index
        items = Item.where(sold: false)
        render json: items, each_serializer: ItemSerializer
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

# # handling a request using a begin/rescue 
#     def update 
#         item = Item.find(params[:id])
#         item.update!(item_params)
#         render json: item, status: :ok

#     rescue ActiveRecord::RecordNotFound => errors
#         render json: errors.message, status: :not_found 
    
#     rescue ActiveRecord::RecordInvalid => invalid 
#         render json: invalid.record.errors, status: :unprocessable_entity
#     end

# handling a request using a begin/rescue rescue_from located in applicationcontroller
    def update 
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :ok
    end

# handling a request using control flow
    # def update 
    #     item = Item.find(params[:id])
    #     if item 
    #         if item.update(item_params)
    #             render json: item, status: :ok
    #         else 
    #             render json: item.errors.full_messages, status: :unprocessable_entity
    #         end 
    #     else 
    #         render json: "Item not found", status: :not_found 
    #     end 
    # end

private 

def item_params
    params.permit(:name, :desc, :price)
end 

end
