Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :races, only: [:index, :show]
    end
  end

  get '*path' => 'homes#index'

  root 'homes#index'
end
