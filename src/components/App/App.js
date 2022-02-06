import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostAddForm from "../PostAddForm/PostAddForm";
import "./App.css";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React js", important: true,  like: false ,  id: 1 },
        { label: "that is so good", important: false,  like: true ,  id: 2 },
        { label: "I need a beak", important: false,  like: false ,  id: 3 },
        { label: "I learn it all", important: false,  like: false ,  id: 4 },
      ],
      term:'',
      filter: 'all'
    };
    this.deleteId = this.deleteId.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.onvalueInput = this.onvalueInput.bind(this)
    this.onSubmitFilter = this.onSubmitFilter.bind(this)
    this.onFilter = this.onFilter.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.minId = 5;
  }
  deleteId(id){
      this.setState({data: this.state.data.filter(post => post.id !==id )})
  }

  addItem(body){
        const NewItem = {
            label: body,
            important: false,
            id: this.minId++
        }
        this.setState(({data}) =>{
            const newArr = [...data ,NewItem]
            return{
                data: newArr
            }
            
        })
  }

  onToggleImportant(id){
      this.setState(({data})=>{
          const index = data.findIndex(post => post.id == id)
          const oldItem = data[index]
          const NewItem  = {...oldItem , important: !oldItem.important }
          const newArr = [...data.slice(0 , index) , NewItem , ...data.slice(index+1)]
          return{
              data: newArr
          }
      })
  }

  onToggleLiked(id){
    this.setState(({data})=>{
        const index = data.findIndex(post => post.id == id )
        const oldItem = data[index]
        const newItem = {...oldItem , like: !oldItem.like}
        const newArr = [...data.slice(0 , index) , newItem , ...data.slice(index+1)]
        return{
            data:newArr
        }
    })
  }

  onSubmitFilter(items , term){
      if(term.length == 0){
          return items
      }
      return items.filter(item=>{
          return item.label.indexOf(term) > -1
      })
  }

  onvalueInput(term){
      this.setState({term:term})
  }

  onFilter(items , filter){
      if(filter === 'like'){
          return items.filter(item => item.like)
      } else{
          return items
      }
  }
  onFilterSelect(filter){
    this.setState({filter:filter})
  }



  render() {
      const {data , term , filter}  = this.state;
      const liked = data.filter(post => post.like).length
      const allPost = data.length;

      const isVisiblity = this.onFilter(this.onSubmitFilter(data , term) , filter)
    return (
      <div className="App">
        <AppHeader liked={liked} allPost={allPost} />
        <div className="search-panel d-flex">
          <SearchPanel onvalueInput={this.onvalueInput}  />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList 
        onDelete={this.deleteId} 
        posts={isVisiblity}
        onToggleImportant ={this.onToggleImportant}
        onToggleLiked = {this.onToggleLiked}
         />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
