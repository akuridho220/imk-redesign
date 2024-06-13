const FotoThumbnail = ({konten}) => {

    const data = [
        {judul:"Dokumentasi Kegiatan I", tgl:"20 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Dokumentasi Kegiatan II", tgl:"21 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Dokumentasi Kegiatan III", tgl:"22 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Dokumentasi Kegiatan IV", tgl:"23 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Dokumentasi Kegiatan V", tgl:"24 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Dokumentasi Kegiatan VI", tgl:"25 Juni 2024", konten:"semua", src:"https://ppid.ntbprov.go.id/img/galleri/1474262525.JPG"},
        {judul:"Rapat Koordinasi I", tgl:"20 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Rapat Koordinasi II", tgl:"21 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Rapat Koordinasi III", tgl:"22 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Rapat Koordinasi IV", tgl:"23 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Rapat Koordinasi V", tgl:"24 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Rapat Koordinasi VI", tgl:"25 Juni 2024", konten:"rapat", src:"https://ppid.ntbprov.go.id/img/galleri/1600051258.jpeg" },
        {judul:"Pelatihan PPID I", tgl:"20 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Pelatihan PPID II", tgl:"21 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Pelatihan PPID III", tgl:"22 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Pelatihan PPID IV", tgl:"23 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Pelatihan PPID V", tgl:"24 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Pelatihan PPID VI", tgl:"25 Juni 2024", konten:"pelatihan", src:"https://ppid.ntbprov.go.id/img/galleri/1474011853.JPG"},
        {judul:"Dokumentasi DBIP I", tgl:"20 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"},
        {judul:"Dokumentasi DBIP II", tgl:"21 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"},
        {judul:"Dokumentasi DBIP III", tgl:"22 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"},
        {judul:"Dokumentasi DBIP IV", tgl:"23 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"},
        {judul:"Dokumentasi DBIP V", tgl:"24 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"},
        {judul:"Dokumentasi DBIP VI", tgl:"25 Juni 2024", konten:"dbip",src:"https://ppid.ntbprov.go.id/img/galleri/1476166046.JPG"}
    ]

    const filtered_data = data.filter( dt => dt.konten === konten);

    return(
        <>
        {filtered_data.map(({judul, tgl, src}) => (
            <a href={src} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={src} alt="" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-xl font-bold text-white">{judul}</h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{tgl}</p>
                </div>
            </a>
        ))}
        </>
    )
}

export default FotoThumbnail;