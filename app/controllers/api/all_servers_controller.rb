class Api::AllServersController < ApplicationController
  def index
    @servers = Server.all()

    render :index
  end
end
