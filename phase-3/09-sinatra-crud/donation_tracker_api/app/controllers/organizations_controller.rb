class OrganizationsController < ApplicationController
    
    get '/organizations' do 
        orgs = Organization.all
        orgs.to_json
    end

    get '/organizations/:id' do 
        org = Organization.find_by_id(params[:id])
        org.to_json
    end

end