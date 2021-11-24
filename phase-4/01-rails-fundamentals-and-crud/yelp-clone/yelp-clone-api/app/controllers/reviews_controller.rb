class ReviewsController < ApplicationController

    def create
        review = current_user.reviews.create(review_params, business_id: Business.first)
        render json: review, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end


    private 

    def review_params
        params.permit(:content)
    end
end
