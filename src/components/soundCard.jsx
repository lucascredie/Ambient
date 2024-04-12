import {useState, useEffect } from 'react';
import {Howl, Howler} from 'howler';

function SoundCard(props) {
   
    useEffect(() => {
        state.track.pause();
       if(state.playing){
            state.track.play();
            state.track.stereo(state.pan);
            state.track.volume(state.volume);
        } else {
            state.track.pause();
        }
    })

    const[loading, setLoading] = useState(false);
    const[state, setState] = useState({
        playing: false,
        track: new Howl({ src: props.sound,  preload: false, volume: 0.5, loop: true }),
        pan: 0, //-1 to 1
        volume: 0.5
    })

    const handleVolumeChange = (event) => {
        let volume = event.target.value/100;
        setState({...state, volume: volume});
      };

      const handlePanChange = (event) => {
        let pan = event.target.value/100;
        setState({...state, pan: pan});
      };

      const handlePlayClick = () => {

        if(state.playing === true){ //already playing we just update state
            console.log("will pause");
            let playing = !state.playing;
            setState({...state, playing: playing});
        } else {
            console.log("will play");

            if(state.track.state() === "loaded"){
                console.log("already loaded");
                let playing = !state.playing;
                setState({...state, playing: playing});
            } else {
                //load
                setLoading(true);
                console.log("needs to load");
                state.track.load();
                state.track.once('load', () => {
                        setLoading(false);
                        console.log('Sound has been loaded successfully!');
                        let playing = !state.playing;
                        setState({...state, playing: playing});
                });
            }
            
        }
        
      };

    return (
        <div className={"soundCard" + (state.playing ? "" : " inactive")}>
            <div className="soundCard_header">
            <div className="soundCard_header-left">
                {props.icon()}
                <p className="soundCard_title">{props.title}</p>
            </div>
                <div className='soundCard_button' onClick={handlePlayClick}>
                    {renderActionButton(state.playing, loading)}
                </div>
            </div>
            <div className="soundCard_controller">
                <div className="soundCard_inputContainer">
                    <input className="sliderInput" type="range" onChange={handleVolumeChange} value={state.volume*100} min='0' max='100'  steps='1'/>  
          </div>
                <div className="soundCard_inputContainer">
                    <input className="sliderInput" type="range" onChange={handlePanChange} value={state.pan*100} min='-100' max='100'  steps='1'/>  
                </div>
            </div>
        </div>
    )
}

//play, pause or loading
function renderActionButton(playing, loading) {
    if(loading){
        return (
            <svg className="loadAnimation" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle1" cx="5" cy="21" r="3" />
                <circle className="circle2" cx="13" cy="21" r="3" />
                <circle className="circle3" cx="21" cy="21" r="3" />
            </svg>
        )
    } 
    if(!playing){
        return (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_1900)">
                <path d="M23 11.2679C24.3333 12.0377 24.3333 13.9623 23 14.7321L9.5 22.5263C8.16667 23.2961 6.5 22.3338 6.5 20.7942L6.5 5.20577C6.5 3.66617 8.16667 2.70392 9.5 3.47372L23 11.2679Z"/>
                </g>
                <defs>
                <clipPath id="clip0_22_1900">
                <rect width="26" height="26" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        )
    } else {
        return (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="3" width="6" height="20" rx="1" />
            <rect x="16" y="3" width="6" height="20" rx="1" />
            </svg>
        )
    }
}

export default SoundCard;