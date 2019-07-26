class ErrorPagesController < ApplicationController
    def handle_404
        render json: { message: "route not found"}, status: 404
    end
end
