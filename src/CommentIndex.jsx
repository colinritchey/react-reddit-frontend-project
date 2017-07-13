import React from 'react';

import { CommentItem } from './CommentItem';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { comments: [] }
  }

  componentDidMount(){
    $.ajax({url: 'https://www.reddit.com/user/kijafa/comments.json',
      type: 'GET',
      dataType: 'json'}).then((r) => {
        let sortedComments = r.data.children.sort((a, b) =>
          b.data.score - a.data.score);

        this.setState({comments: sortedComments});
      });
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.comments.map((comment) => {
            return CommentItem(comment.data)
          })}
        </ul>
      </div>
    )
  }
};

export default CommentIndex;
