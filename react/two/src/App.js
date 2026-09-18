import React from 'react';
// import Hello from './Hello';
// import Length from './Length';
// import Form from './Form';
import Range from './Range';
import Posts from './Posts';
import './App.css';


class App extends React.Component {
//10/09/26
  state = {
  posts: [
    {id: "1", name: "JS Basics", title: "Обучение базовым конструкциям JavaScript"},
    {id: "2", name: "JS Advanced", title: "Обучение расширенным возможностям JavaScript"},
    {id: "3", name: "React JS", title: "Обучение React JS"}
  ]
}
removePost = (id) => {
  this.setState({posts: this.state.posts.filter(post =>post.id !== id)});
}
  render(){
    let {posts} = this.state;
  return (
    <div className="App">

{/* <Hello/>
<Length/>
<Form/> */}
<Range/>

<Posts posts ={posts}/>
    </div>
  );
}
}

export default App;
