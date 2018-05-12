Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :races, only: [:index, :show] do
        resources :registrations, only: [:create]
      end
    end
  end

  resources :races, only: [:index, :new, :create]

  get '*path' => 'homes#index'

  root 'homes#index'
end
