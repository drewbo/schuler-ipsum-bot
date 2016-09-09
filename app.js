require('dotenv').config()
const Twitter = require('twitter')
const schulerIpsum = require('schuler-ipsum')

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const status = schulerIpsum(100).slice(0, 140)

client.post('statuses/update', { status }, function (error, tweet, response) {
  if (error) console.warn(error)
  console.log(tweet)
  console.log(response)
})
