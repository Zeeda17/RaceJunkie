Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :races, only: [:index, :show, :create] do
        resources :registrations, only: [:index, :show, :create]
      end
    end
  end


  get '*path' => 'homes#index'

  root 'homes#index'
end
