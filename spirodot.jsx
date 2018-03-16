import React, { Component } from 'react';

export default class Spiro extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  componentDidMount = (e) => {
    let leds = document.getElementsByClassName('snip-led')
    let arr = ["red", "blue", "green", "yellow", "none", "none"]
      setInterval(() => {
        var i = this.getRandomInt(640)
        var x = this.getRandomInt(3)
          let color = arr[this.getRandomInt(arr.length)]
          let led = leds.item(i)
          led.style.background = color
          led.style.animation = "scale2 alternate infinite "+ String(this.getRandomInt(250)/100) +"s"
          led.style.opacity = this.getRandomInt(75)/100
      }, 10)
  }
  render(){
    return(
      <div style={{background: '#212121', width: '100vw', height: '100vh'}}>
        <div style={styles.outer}>
          <div style={styles.topRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
          <div style={styles.midRow}>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>

            <div style={styles.rowCol}></div>

            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
          </div>
          <div style={styles.botRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
        </div>
        <div style={styles.outer2}>
          <div style={styles.topRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
          <div style={styles.midRow}>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>

            <div style={styles.rowCol}></div>

            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
          </div>
          <div style={styles.botRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
        </div>
        <div style={styles.outer3}>
          <div style={styles.topRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
          <div style={styles.midRow}>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>

            <div style={styles.rowCol}></div>

            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
          </div>
          <div style={styles.botRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
        </div>
        <div style={styles.outer4}>
          <div style={styles.topRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
          <div style={styles.midRow}>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>

            <div style={styles.rowCol}></div>

            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
            <div style={styles.lightCellHorz} className="snip-led"></div>
          </div>
          <div style={styles.botRow}>
            <div style={styles.rowFill}></div>
            <div style={styles.rowCol}>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
              <div style={styles.lightCellVert} className="snip-led"></div>
            </div>
            <div style={styles.rowFill}></div>
          </div>
        </div>
      </div>
    )
  }
};

const styles = {
  outer: {
    width: '500px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 'calc(50% - 260px)',
    left: 'calc(50% - 260px)',
    borderRadius: '100%',
    overflow: 'hidden',
    animation: 'spin linear infinite 0.5s',
    zIndex: 2
    },
    outer2: {
      width: '500px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 'calc(50% - 260px)',
      left: 'calc(50% - 260px)',
      borderRadius: '100%',
      overflow: 'hidden',
      transform: 'rotate(45deg)',
      animation: 'spin linear infinite 0.25s',
      zIndex: 1
    },
    outer3: {
      width: '500px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 'calc(50% - 260px)',
      left: 'calc(50% - 260px)',
      borderRadius: '100%',
      overflow: 'hidden',
      transform: 'rotate(45deg)',
      animation: 'spin linear infinite 0.125s',
      zIndex: 1
    },
    outer4: {
      width: '500px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 'calc(50% - 260px)',
      left: 'calc(50% - 260px)',
      borderRadius: '100%',
      overflow: 'hidden',
      transform: 'rotate(45deg)',
      animation: 'spin linear infinite 0.0125s',
      zIndex: 1
    },
    topRow: {
      flex: 40,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    midRow: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    botRow: {
      flex: 40,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    rowFill: {
      flex: 40,
      height: '100%',
    },
    rowCol: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    lightCellVert: {
      flex: 1,
      width: '100%',
      borderRadius: '100%',
    },
    lightCellHorz: {
      flex: 1,
      height: '100%',
      borderRadius: '100%',
    },

}
