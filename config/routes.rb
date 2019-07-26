Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "home#index"

  post 'login' => 'sessions#create'
  post 'register' => 'registrations#create'
  
  namespace :api do
    namespace :v1 do
      resources :projects, except: %i[new edit]
      resources :todos, except: %i[new edit]
      get 'profile' => 'users#profile'
    end
  end

  match '*path', to: "error_pages#handle_404", via: [:get, :post]
end
