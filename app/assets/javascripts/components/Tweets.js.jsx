class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.state = {tweets: []};
    this.search = this.search.bind(this);
    this.refreshTweets = this.refreshTweets.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  componentDidMount(){
    this.refreshTweets();
  }
  
  refreshTweets(){
    $.ajax({
      url: '/tweets/index',
      type: 'GET',
    }).success( data => {
      this.setState({
        tweets: data.tweets
      });
    }
    );
  }

  search(){

  }

  createTweet(){
    $.ajax({
      url: '/create_tweet',
      type: 'POST',
      data: {body: this.refs.newTweet.value}
    }).success( data => {
      this.refreshTweets();
    });
  }

  render(){
    let tweets = this.state.tweets.map(tweet =>
      { let key = `tweet-${tweet.id}`;
        return(
        <div>
          <p key={key} >{tweet.text}</p>
          <hr />
        </div>
        )});

    return(<div>
            <input placeholder='Your tweet' ref='newTweet' autoFocus={true} type='text' />
            <button className='btn' onClick={this.createTweet}>Submit</button>
            <div >
              <div className='row'>
                <div className='col m7 grey'>
                  <div className="card-panel teal lighten-2">
                    {tweets}
                  </div>
                </div>
              </div>
            </div>
           </div>);

  }

}
