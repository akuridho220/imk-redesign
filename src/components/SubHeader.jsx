const SubHeader = (props) => {
    return(
        <div>
            <h1 className="uppercase font-bold text-2xl">{props.subhead}</h1>
            <p className="text-justify">{props.detail}</p>
        </div>
    )
}

export default SubHeader;