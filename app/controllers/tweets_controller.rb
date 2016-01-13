class TweetsController < ApplicationController
  def index
    @tweets = twitter_client.user_timeline("RockstadAnder")
    render 'index'
  end

 

  def create
    @tweet = twitter_client.update(params[:body])
  end


  

  

end
