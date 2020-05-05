class HomeController < ApplicationController
  before_action :authenticate_user!
  
  def index
  	@missatge = Missatge.new
    @missatges = Missatge.all
  end
end
