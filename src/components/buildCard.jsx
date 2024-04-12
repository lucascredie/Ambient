function BuildCard (props) {
    return (
        <div className="buildCard" onClick={() => props.clickFunction(props.canvas, props.full)}>
            <img src={props.thumb} alt="" />
        </div>
    )
}

export default BuildCard;