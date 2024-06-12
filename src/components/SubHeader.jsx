const SubHeader = (props) => {
    return(
        <div>
            <h1 className="uppercase font-bold">{props.subhead}</h1>
            <p>{props.detail}</p>
        </div>
    )
}

export default SubHeader;