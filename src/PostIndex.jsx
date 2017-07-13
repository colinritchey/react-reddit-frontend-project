import React from 'react';

import { PostItem } from './PostItem';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts: [] }
  }

  componentDidMount(){
    $.ajax({url: 'https://www.reddit.com/user/kijafa/submitted.json',
      type: 'GET',
      dataType: 'json'}).then((r) => {
        let sortedPosts = r.data.children.sort((a, b) =>
          b.data.score - a.data.score);

        this.setState({posts: sortedPosts});
      });
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.posts.map((post) => {
            return PostItem(post.data)
          })}
        </ul>
      </div>
    )
  }
};

export default PostIndex;
