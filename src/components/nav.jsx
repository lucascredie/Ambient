import Logo from './logo';
import ColorBlob from './colorBlob';
import Bucket from './bucket';

function Nav(props) {
    let titleName = props.isOpen ? 'Build!' : "Sounds!";
    return (
        <div className="nav">
            <div className="navContainer">
                <p className="navContainer_title" onClick={() => {props.setSoundMenu(!props.isOpen)}}>{titleName}</p>
            </div>
            <Logo color="#000000" />
            <div className="colorContainer">
            <Bucket />
            <ColorBlob color="AMBER" />
            <ColorBlob color="PURPLE" />
            <ColorBlob color="YELLOW" />
            <ColorBlob color="RED" />
            <ColorBlob color="BLUE" />
            <ColorBlob color="GREEN" />
            </div>
        </div>
    )
}

export default Nav;