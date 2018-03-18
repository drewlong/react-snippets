import React, { Component } from 'react';
import Styles from './css/spinners.css';

export default class Spinners extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: ''
    }
  }
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  componentDidMount = () => {
    this.spinnerTurtle()
  }
  spinnerTurtle = () => {
    const id = setInterval(() => {
      this.refs["turtle-shell-01"].style = "transform-origin: 50% 51%; animation: spin ease-in-out 1.5s; animation-delay: 0"
      this.refs["turtle-shell-02"].style = "transform-origin: 50% 51%; animation: spin ease-in-out 1.0s; animation-delay: 0.5s"
      this.refs["turtle-shell-03"].style = "transform-origin: 50% 51%; animation: spin ease-in-out 0.8s; animation-delay: 0.7s"
      this.refs["turtle-shell-04"].style = "transform-origin: 50% 51%; animation: spin ease-in-out 0.6s; animation-delay: 0.9s"
      setTimeout(() => {
        try{
          this.refs["turtle-shell-01"].style.animation = 'none'
          this.refs["turtle-shell-02"].style.animation = 'none'
          this.refs["turtle-shell-03"].style.animation = 'none'
          this.refs["turtle-shell-04"].style.animation = 'none'
          this.refs["turtle"].style.animation = "spin ease 1s"
          setTimeout(() => {
            this.refs["turtle"].style.animation = 'none'
          }, 900)
        }catch(e){}
      }, 1400)
    }, 1500)
    this.setState({id: id})
  }
  componentWillUnmount = () => {
    clearInterval(this.state.id)
    this.setState({id: ''})
  }
  render(){
    return(
      <div style={styles.outer}>
        <div style={styles.row}>
          <svg width="110px" height="110px" ref="turtle">
            <path fill="#C7DBD0" d="M54,101.5v-44h44C98,81.762,78.262,101.5,54,101.5z" ref="turtle-shell-01"/>
            <path fill="#96BCA7" d="M8,57.5h46v46C28.636,103.5,8,82.864,8,57.5z" ref="turtle-shell-02"/>
            <path fill="#558F6E" d="M54,57.5H6c0-26.467,21.533-48,48-48V57.5" ref="turtle-shell-03"/>
            <path fill="#207245" d="M104,57.5H54v-50C81.614,7.5,104,29.886,104,57.5z" ref="turtle-shell-04"/>
          </svg>
          <svg width="110px" height="110px" >
            <g ref="layer-01" style={{transformOrigin: 'center', animation: 'spin linear infinite 4s'}}>
              <path fill="none" stroke="#4CC4CF" stroke-miterlimit="10" d="M54.616,101c-25.364,0-46-20.636-46-46s20.635-46,46-46
                s46,20.636,46,46S79.98,101,54.616,101z"/>
              <circle fill="#4CC4CF" cx="54.616" cy="9" r="2"/>
            </g>
            <g ref="layer-02" style={{transformOrigin: 'center', animation: 'spin linear infinite 3s'}}>
              <path fill="none" stroke="#4CC4CF" stroke-miterlimit="10" d="M54.616,93c-20.953,0-38-17.047-38-38s17.046-38,38-38
                s38,17.047,38,38S75.569,93,54.616,93z"/>
              <circle fill="#4CC4CF" cx="54.616" cy="17" r="5"/>
            </g>
            <g ref="layer-03" style={{transformOrigin: 'center', animation: 'spin linear infinite 2s'}}>
              <path fill="none" stroke="#4CC4CF" stroke-miterlimit="10" d="M54.616,85c-16.542,0-30-13.458-30-30s13.458-30,30-30
                s30,13.458,30,30S71.158,85,54.616,85z"/>
              <circle fill="#4CC4CF" cx="54.616" cy="25" r="3"/>
            </g>
            <g ref="layer-04" style={{transformOrigin: 'center', animation: 'spin linear infinite 3s', animationDelay: '0.25s'}}>
              <path fill="none" stroke="#4CC4CF" stroke-miterlimit="10" d="M54.616,77c-12.13,0-22-9.869-22-22s9.869-22,22-22
                c12.131,0,22,9.869,22,22S66.747,77,54.616,77z"/>
              <circle fill="#4CC4CF" cx="54.616" cy="33" r="3"/>
            </g>

          </svg>
          <svg width="110px" height="110px" ref="spiro" >
            <g id="Layer_1" style={{transformOrigin: 'center', animation: 'spin ease-in-out infinite 2s'}}>
              <ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 54.8518 132.7174)" opacity="0.5" fill="none" stroke="#ff0000" stroke-miterlimit="10" cx="54.913" cy="54.999" rx="10" ry="49.999"/>
              <ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 54.8518 132.7174)" opacity="0.5" fill="none" stroke="#70C6A4" stroke-miterlimit="10" cx="54.913" cy="54.999" rx="20" ry="50.001"/>
              <ellipse transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 132.6315 55.0593)" opacity="0.5" fill="none" stroke="#ff0000" stroke-miterlimit="10" cx="54.913" cy="54.999" rx="10" ry="49.999"/>
              <ellipse transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 132.6315 55.0593)" opacity="0.5" fill="none" stroke="#70C6A4" stroke-miterlimit="10" cx="54.913" cy="54.999" rx="20" ry="50.001"/>
            </g>
            <g id="Layer_2" opacity="0.8" style={{transformOrigin: 'center', animation: 'spin ease-in-out reverse infinite 2s'}}>
              <g>
                <ellipse opacity="0.5" fill="none" stroke="#ff0000" stroke-miterlimit="10" cx="54.913" cy="55" rx="10" ry="50"/>
                <ellipse opacity="0.5" fill="none" stroke="#6BBD45" stroke-miterlimit="10" cx="54.912" cy="54.999" rx="20" ry="50.001"/>
                <ellipse opacity="0.5" fill="none" stroke="#ff0000" stroke-miterlimit="10" cx="54.914" cy="54.999" rx="50" ry="10"/>
                <ellipse opacity="0.5" fill="none" stroke="#6BBD45" stroke-miterlimit="10" cx="54.913" cy="54.999" rx="50.001" ry="20"/>
              </g>
            </g>
          </svg>
          <svg width="110px" height="110px" style={{opacity: '0.5', animation: 'rotateHalf alternate ease-in-out infinite 2s'}}>
            <line fill="none" stroke="#484C47" stroke-miterlimit="10" x1="25" y1="55" x2="85.965" y2="55"/>
            <circle stroke="#484C47" fill="#6BBD45" cx="25" cy="55" r="20" style={{animation: 'scale3 ease-in-out alternate infinite 2s'}} />
            <circle stroke="#484C47" fill="#45AEBC" cx="85" cy="55" r="10" style={{animation: 'scale3 ease-in-out alternate-reverse infinite 2s'}} />
          </svg>
        </div>
        <div style={styles.row}>
          <svg width="110px" height="110px" style={{opacity: 0.5}}>
            <rect fill="#1b5e20" x="5" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.1s'}} />
            <rect fill="#1b5e20" x="20" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.2s'}} />
            <rect fill="#1b5e20" x="35" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.3s'}} />
            <rect fill="#1b5e20" x="50" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.4s'}} />
            <rect fill="#1b5e20" x="65" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.5s'}} />
            <rect fill="#1b5e20" x="80" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.6s'}} />
            <rect fill="#1b5e20" x="95" y="50" width="10" height="10" style={{animation: 'barScale alternate ease-in-out infinite 1s', transformOrigin: 'center', animationDelay: '0.7s'}} />
          </svg>
          <svg width="110px" height="110px" style={{opacity: 0.5}}>
            <rect fill="#f57c00" x="5" y="50" width="10" height="10" style={{animation: 'upOverDown ease infinite 2s', transformOrigin: 'center', animationDelay: '0s'}} />
            <rect fill="#e64a19" x="5" y="50" width="10" height="10" style={{animation: 'upOverDown ease infinite 2s', transformOrigin: 'center', animationDelay: '0.5s'}} />
            <rect fill="#00acc1" x="50" y="50" width="10" height="10" style={{animation: 'upDown alternate linear infinite 1s', transformOrigin: 'center', animationDelay: '0s'}} />
          </svg>
          <svg width="110px" height="110px">
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.1s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.2s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.3s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.4s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.5s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.6s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.7s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.8s'}} />
            <rect x="calc(50% - 5px" y="calc(50% - 5px)" width="10" height="10" fill="#263238" style={{animation: 'sqScale ease-in-out infinite 2s', transformOrigin: 'center', animationDelay: '0.9s'}} />
          </svg>
          <svg width="80px" height="110px" style={{opacity: 0.5}}>
            <rect fill="#7cb342" x="10" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.1s', transformOrigin: 'center', animationDelay: '0s'}} />
            <rect fill="#7cb342" x="20" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.2s', transformOrigin: 'center', animationDelay: '0.125s'}} />
            <rect fill="#7cb342" x="30" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.3s', transformOrigin: 'center', animationDelay: '0.25s'}} />
            <rect fill="#7cb342" x="40" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.4s', transformOrigin: 'center', animationDelay: '0.375s'}} />
            <rect fill="#7cb342" x="50" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.5s', transformOrigin: 'center', animationDelay: '0.5s'}} />
            <rect fill="#7cb342" x="40" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.6s', transformOrigin: 'center', animationDelay: '0.625s'}} />
            <rect fill="#7cb342" x="30" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.7s', transformOrigin: 'center', animationDelay: '0.75s'}} />
            <rect fill="#7cb342" x="20" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.8s', transformOrigin: 'center', animationDelay: '0.875s'}} />
            <rect fill="#7cb342" x="10" y="40" width="4" height="4" style={{animation: 'sqChaser alternate ease infinite 1.9s', transformOrigin: 'center', animationDelay: '1s'}} />
          </svg>
        </div>
      </div>
    )
  }
}

const styles = {
  outer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
