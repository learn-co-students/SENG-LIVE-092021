class ReviewsController < ApplicationController

    def create
        review = current_user.reviews.create(review_params, business_id: Business.first)
        render json: review, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:content)
    end
end
