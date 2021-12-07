class ReviewsController < ApplicationController
    before_action :is_authenticated
    before_action :set_reviews, only: [:update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]

    def index 
        reviews = Review.all 
        render json: reviews 
    end

    def create
        review = current_user.reviews.create(review_params, business_id: Business.first)
        render json: review, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    def update 
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy 
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:content)
    end

    def set_reviews 
        @review = Review.find_by_id(params[:id])
    end

    def is_authorized
        permitted = current_user == @review.user
        render json: "You are not allowed!!!", status: :forbidden unless permitted
    end
end
