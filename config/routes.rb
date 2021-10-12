Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update] do
      resources :servers, only: [:index]
    end

    resources :servers, except: [:index, :new, :edit] do
      resources :channels, only: [:index]
    end
    
    resources :channels, only: [:create, :destroy]
    resources :user_servers, only: [:create, :destroy]
    
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
