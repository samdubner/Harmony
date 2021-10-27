Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => "/cable"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update] do
      resources :servers, only: [:index]
      resources :groups, only: [:index]
    end

    resources :servers, except: [:index, :new, :edit] do
      resources :channels, only: [:index]
    end

    resources :groups, except: [:index, :new, :edit, :update] do
      resources :private_messages, only: [:index]
    end
    
    resources :channels, only: [:create, :destroy] do 
      resources :messages, only: [:index]
    end
    resources :messages, only: [:destroy]

    resources :user_servers, only: [:create, :destroy]
    resources :user_groups, only: [:create, :destroy]
    
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
