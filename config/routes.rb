Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:show]
      resources :races, only: [:index, :show] do
        resources :registrations, only: [:create]
        resources :teams, only: [:show, :create]
      end
    end
  end

  resources :races, only: [:index, :new, :create]

  get '*path' => 'homes#index'

  root 'homes#index'
end
