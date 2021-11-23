class BusinessesController < ApplicationController

    def index 
        businesses = Business.all 
        render json: businesses
    end

    def show 
        business = Business.find_by_id(params[:id])
        if business 
            render json: business 
        else 
            render json: {error: "Business does not exist"}, status_code: :not_found
        end
    end
end

