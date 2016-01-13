
json.tweets do 
  json.screen_name @tweet.user.screen_name
  json.text @tweet.text
end