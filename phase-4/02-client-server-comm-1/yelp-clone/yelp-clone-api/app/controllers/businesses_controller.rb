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

    def create
        business = Business.create(business_params)
        render json: business, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end


    private 

    def business_params
        params.permit(:name, :category, :city, :state, :zip_code)
    end
end

