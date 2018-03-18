import React, { Component } from 'react';


export default class DotClock extends Component{
  constructor(props){
    super(props);
    this.state = {
      sq1: [],
      sq2: [],
      sq3: [],
      sq4: [],
      sq5: [],
      sq6: [],
      clockIntervalID: '',
      dotLitColor: '#e42115',
      dotColor: '#313131',
      clockBGColor: '#212121',
      clockSize: 1.0,
      showOptions: false,
      slider: 100
    }
  }
  showTime = (input) => {
    for(let s = 1; s < 7; s++){
      var square = []
      for(let r = 1; r < 8; r++){
        for(let c = 1; c < 5; c++){
          let y = r * 15
          let x = c * 15
          let obj = {x: x, y: y, color: ''}
          square.push(obj)
        }
      }
      let number = lookup[input[s-1]]
      if(number !== undefined){
        square.map((s, i) => {
          if(number[i] === 1){
            square[i].color = this.state.dotLitColor
          }else{
            square[i].color = this.state.dotColor
          }
        })
      }else{
        square.map((s, i) => {square[i].color = "#404040"})
      }
      this.setState({["sq" + String(s)]: square})
    }
  }

  componentDidMount = () => {
    Object.keys(this.props).map((p, i) => {
      this.setState({[p]: this.props[p]})
    })
    var id = setInterval(() => {
      var today = new Date();
      var h = String((today.getHours() < 10 ? '0' : '') + today.getHours())
      var m = String((today.getMinutes() < 10 ? '0' : '') + today.getMinutes())
      var s = String((today.getSeconds() < 10 ? '0' : '') + today.getSeconds())
      this.showTime([h[0], h[1], m[0], m[1], s[0], s[1]])
    }, 100)
    this.setState({clockIntervalID: id})
  }
  componentWillUnmount = () => {
    clearInterval(this.state.clockIntervalID)
  }
  handleColor = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  handleSize = (e) => {
    let height = e.target.value
    let val = e.target.value / 100
    let num = Math.round( val * 10) / 10
    this.setState({clockSize: num, slider: height})
  }
  render(){
    return(
      <div style={styles.outer}>
        <div style={{...styles.clock, ...{background: this.state.clockBGColor, transform: "scale(" + String(this.state.clockSize) + ")"}}}>
          <svg width="75px" height="120px" ref="sq1">
            {this.state.sq1.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
          <svg width="75px" height="120px" ref="sq2">
            {this.state.sq2.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
          <div style={{background: this.state.clockBGColor, fontSize: '5em', color: this.state.dotLitColor, height: '120px'}}>:</div>
          <svg width="75px" height="120px" ref="sq3">
            {this.state.sq3.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
          <svg width="75px" height="120px" ref="sq4">
            {this.state.sq4.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
          <div style={{background: this.state.clockBGColor, fontSize: '5em', color: this.state.dotLitColor, height: '120px'}}>:</div>
          <svg width="75px" height="120px" ref="sq4">
            {this.state.sq5.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
          <svg width="75px" height="120px" ref="sq4">
            {this.state.sq6.map((sq, i) => {
              return(
                <circle cx={sq.x} cy={sq.y} r="5" fill={sq.color} />
              )
            })}
          </svg>
        </div>
        {this.state.showOptions &&
          <div style={styles.inputCont}>
            <div style={{flex: 1, width: '100%'}}>
              <label type="text" style={{marginLeft: '10px', width: '150px', height: '20px', float: 'left', textAlign: 'center'}}>Lit Dot Color</label>
              <label type="text" style={{width: '150px', height: '20px', margin: '0 auto', textAlign: 'center'}}>Unlit Dot Color</label>
              <label type="text" style={{marginRight: '10px', width: '150px', height: '20px', float: 'right', textAlign: 'center'}}>Clock Background</label>
            </div>
            <div style={{flex: 1, width: '100%'}}>
              <input type="color" onChange={this.handleColor} id="dotLitColor" value={this.state.dotLitColor} style={{marginLeft: '10px', width: '150px', height: '20px', float: 'left'}}/>
              <input type="color" onChange={this.handleColor} id="dotColor" value={this.state.dotColor} style={{width: '150px', height: '20px', margin: '0 auto'}} />
              <input type="color" onChange={this.handleColor} id="clockBGColor" value={this.state.clockBGColor} style={{marginRight: '10px', width: '150px', height: '20px', float: 'right'}} />
            </div>
            <div style={{flex: 1, width: '100%'}}>
              <br />
              Size:
              <br />
              <input type="range" onChange={this.handleSize} id="clockSize" min="1" max="100" value={this.state.slider} style={{width: '300px', height: '20px'}}/>
            </div>
          </div>
        }
      </div>
    )
  }
};

const styles = {
  outer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'serif',
  },
  clock: {
    width: '520px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    marginBottom: '5px'
  },
  inputCont: {
    background: '#212121',
    width: '520px',
    padding: '10px 0',
    textAlign: 'center',
    fontFamily: '"Raleway", sans-serif',
    fontSize: '0.9em',
    color: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
  }
}
const lookup = {
  "0": [
    0, 1, 1, 0,
    1, 0, 0, 1,
    1, 0, 0, 1,
    1, 0, 0, 1,
    1, 0, 0, 1,
    1, 0, 0, 1,
    0, 1, 1, 0
  ],
  "1": [
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1
  ],
  "2": [
    1, 1, 1, 0,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 1, 1, 0,
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 1, 1, 1
  ],
  "3": [
    1, 1, 1, 0,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 1, 1, 0,
    0, 0, 0, 1,
    0, 0, 0, 1,
    1, 1, 1, 0
  ],
  "4": [
    1, 0, 0, 1,
    1, 0, 0, 1,
    1, 0, 0, 1,
    1, 1, 1, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1
  ],
  "5": [
    1, 1, 1, 1,
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 1, 1, 0,
    0, 0, 0, 1,
    0, 0, 0, 1,
    1, 1, 1, 0
  ],
  "6": [
    0, 1, 1, 0,
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 1, 1, 0,
    1, 0, 0, 1,
    1, 0, 0, 1,
    0, 1, 1, 0
  ],
  "7": [
    1, 1, 1, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1
  ],
  "8": [
    0, 1, 1, 0,
    1, 0, 0, 1,
    1, 0, 0, 1,
    0, 1, 1, 0,
    1, 0, 0, 1,
    1, 0, 0, 1,
    0, 1, 1, 0
  ],
  "9": [
    0, 1, 1, 0,
    1, 0, 0, 1,
    1, 0, 0, 1,
    0, 1, 1, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    1, 1, 1, 0
  ]
}
