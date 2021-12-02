class CategoriesController < ApplicationController

    def index 
        categories = Category.includes(:items).all
        render json: categories, include: ['items.seller']
    end

    def show 
        category = Category.find(params[:id])
        render json: category
    end
end
