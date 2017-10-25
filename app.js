// var Oranges = () => (
//   <li> Oranges </li>
// )

// var Bananas = () => (
//   <li> Bananas </li>
// )
class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  onEnter() {
    this.setState({
      hover: true
    });
  }
  onLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onLeave.bind(this)}>{this.props.item}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
     <GroceryListItem item={item} />
     )}
  </ul>
);

var App = () => (
  <div>
    <h1> Grocery List </h1>
    <GroceryList items={['Mangoes', 'Bananas', 'Kiwi', 'Bananas', 'Oranges']} />
  </div>
  )

ReactDOM.render(<App />, document.getElementById('app'));
