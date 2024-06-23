const VideoThumbnail = ({foto}) => {
    return(
        <div className="h-24 rounded-md md:rounded-lg aspect-video relative hover:cursor-pointer overflow-hidden">
            <img
                alt="Tunggu saja, loading guys"
                loading="lazy"
                width="96"
                height="96"
                decoding="async"
                data-nimg="1"
                className="absolute w-full h-full object-contain -z-0"
                src={foto}
                style={{ color: "transparent" }}
            />
        </div>
    )
}

export default VideoThumbnail;