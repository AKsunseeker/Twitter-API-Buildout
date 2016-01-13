
json.tweets @tweets do |tweet|
  json.id tweet.id
  json.screen_name tweet.user.screen_name
  json.text tweet.text
end