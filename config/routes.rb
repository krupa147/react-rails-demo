Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "home#index"
  devise_for :users,
           path: '',
           path_names: {
             sign_in: 'login',
             sign_out: 'logout',
             registration: 'signup'
           },
           controllers: {
             sessions: 'sessions',
             registrations: 'registrations'
           },
           defaults: { format: :json }

  namespace :api do
    namespace :v1 do
      resources :projects, except: %i[new edit]
      resources :todos, except: %i[new edit]
    end
  end
end
