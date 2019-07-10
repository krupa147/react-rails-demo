class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    binding.pry
    render json: resource
  end
  def respond_to_on_destroy
    head :ok
  end
end
