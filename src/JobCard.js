import { Component } from 'react'
import ReactCardFlip from 'react-card-flip';

const CardComponent = ({text, click, clickText}) => {
    return (
        <div className="p-5 w-full dark:text-white">
            <h1>{text}</h1>
            <button onClick={click}>{clickText}</button>
        </div>
    )
}

export default class JobCard extends Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render() {
      const { title, description, links } = this.props.job
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" flipSpeedBackToFront=".1" flipSpeedFrontToBack=".1">
          <CardComponent text={title} click={e => this.handleClick(e)} clickText="&#9660;" />
          <CardComponent text={description} click={e => this.handleClick(e)} clickText="&#9650;" />
        </ReactCardFlip>
      )
    }
  }