class DashboardController < ApplicationController
  def index
    
    client = Twitter::REST::Client.new do |config|
    config.consumer_key = ENV['CONSUMER_KEY']
    config.consumer_secret = ENV['CONSUMER_SECRET']
    config.access_token = ENV['ACCESS_TOKEN']
    config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
    end
 
    user = twitter_client.user('RockstadAnder')
    user.tweet
    user.tweet.full_text
    user.following


  end

  def new
    
  end

  def create
    
  end

  def show
    
  end

  def edit
    
  end

  def update

  end

  def destroy
    
  end


end
