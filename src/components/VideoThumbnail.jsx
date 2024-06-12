const VideoThumbnail = () => {
    return(
        <div className="h-24 rounded-md md:rounded-lg aspect-video relative hover:cursor-pointer overflow-hidden">
                    <img
                    alt="[Company Profile] - Badan Pusat Statistik, Mencerdaskan Bangsa dengan Data"
                    loading="lazy"
                    width="96"
                    height="96"
                    decoding="async"
                    data-nimg="1"
                    className="absolute w-full h-full object-contain -z-0"
                    srcset="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fq9BYxUJ-4z4%2Fmaxresdefault.jpg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fq9BYxUJ-4z4%2Fmaxresdefault.jpg&amp;w=256&amp;q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fq9BYxUJ-4z4%2Fmaxresdefault.jpg&amp;w=256&amp;q=75"
                    style={{ color: "transparent" }}
                    />
                    <div className="bg-gradient-to-b from-black-body to-transparent w-full h-full rounded-md md:rounded-lg p-2 relative z-0">
                    <p className="caption font-medium overflow-text-ellipsis text-white text-left" style={{ WebkitLineClamp: 1 }}>
                        [Company Profile] - Badan Pusat Statistik, Mencerdaskan Bangsa dengan Data
                    </p>
                    <div className="h-8 w-h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                        <path
                            className="ytp-large-play-button-bg"
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                            fill="#f00"
                        ></path>
                        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                    </div>
                    </div>
                </div>
    )
}

export default VideoThumbnail;