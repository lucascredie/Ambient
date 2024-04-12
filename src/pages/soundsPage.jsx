import SoundCard from '../components/soundCard';
import { RainIcon, FireIcon, CoffeeIcon, ThunderstormIcon, CarIcon, CityIcon, ForestIcon, WindIcon, WavesIcon} from '../components/icons';
import RainSound from '../assets/rain.mp3';
import FireSound from '../assets/fire.mp3';
import CoffeeSound from '../assets/coffee.mp3';
import ThunderSound from '../assets/thunder.mp3';
import CarSound from '../assets/car.mp3';
import CitySound from '../assets/city.mp3';
import ForestSound from '../assets/forest.mp3';
import WindSound from '../assets/wind.mp3';
import WavesSound from '../assets/waves.mp3';

function SoundsPage(props) {
    console.log(props.isOpen)
    const cNameParent = "soundGridParent " + (props.isOpen ? "" : "closed");
    const cName = "soundGrid ";

    return(
        <div className={cNameParent}>
            <div className={cName}>
                <SoundCard title="Rain" icon={RainIcon} sound={RainSound} />
                <SoundCard title="Fire" icon={FireIcon} sound={FireSound} />
                <SoundCard title="Coffee" icon={CoffeeIcon} sound={CoffeeSound} />
                <SoundCard title="Thunderstorm" icon={ThunderstormIcon} sound={ThunderSound} />
                <SoundCard title="Car Ride" icon={CarIcon} sound={CarSound} />
                <SoundCard title="City" icon={CityIcon} sound={CitySound} />
                <SoundCard title="Forest" icon={ForestIcon} sound={ForestSound} />
                <SoundCard title="Wind" icon={WindIcon} sound={WindSound} />
                <SoundCard title="Waves" icon={WavesIcon} sound={WavesSound} />
            </div>
        </div>
    )
}

export default SoundsPage;