import React, { useState } from 'react'

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return "You liked this."
    }

    return (
      <div>
        <button onClick={() => this.setState({ liked: true })}>Like</button>
      </div>
    )
  }
}
function Post (props) {
    console.log(props)
    return (
    <div>
       <p>{props.children}</p>
        <LikeButton></LikeButton>
        </div>
    )
}


export let Root = () => (
<>
    <Post>Like this post if your favorite color is <h1>Orange</h1></Post>
    <Post>Like this post if your favorite color is <h2>Blue</h2></Post>
    <Post>Like this post if your favorite color is <h3>Purple</h3></Post>
    <Post>Like this post if your favorite color is <h4>Green</h4></Post>
</>
)
//added two new buttons and a new h2 style header 
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h2 style={{backgroundColor: "Gold"}}>I am a student at UCF</h2>
      <p> <button onClick={Major}>Click to see what my Major!</button></p>
      <p> <button onClick={Friend}>Click to see what my favorite tv show is!</button></p>
      </div>
    );
  }
}
function Major() {
  alert("Digital Media/ Web Design");
  
};
//function for button
function Friend() {
  alert("Friends!");
  
}