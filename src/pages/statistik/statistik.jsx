import Chart from "react-apexcharts";
import BoxHeader from "../../components/BoxHeader";

const Statistik = () => {
    const options1 = {
        chart : {
            id: "basic-bar",
        },
        xaxis: {
            categories: ["DIP Berkala","DIP Serta Merta", "DIP Setiap Saat"]
        },
        title:{
            text: "Statistik Informasi Publik",
            floating: true,
            align: "center",
            style: {
                fontSize: '24px',
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '16px',
                colors: ["#304758"]
            }
        },
    }
    const options1_hp = {
        chart : {
            id: "basic-bar",
        },
        xaxis: {
            categories: ["DIP Berkala","DIP Serta Merta", "DIP Setiap Saat"]
        },
        title:{
            text: "Statistik Informasi Publik",
            floating: true,
            align: "center",
            style: {
                fontSize: '16px',
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
    }
    const series1 = [
        {
            name : "Statistik Informasi Publik",
            data: [1447, 61, 194]
        }
    ]

    const options2 = {
        chart : {
            id: "basic-bar",
        },
        xaxis: {
            categories: ["Menunggu","Diproses", "Dipenuhi", "Ditolak"]
        },
        title:{
            text: "Statistik Permohonan Informasi",
            floating: true,
            align: "center",
            style: {
                fontSize: '24px',
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '16px',
                colors: ["#304758"]
            }
        }
    }
    const options2_hp = {
        chart : {
            id: "basic-bar",
        },
        xaxis: {
            categories: ["Menunggu","Diproses", "Dipenuhi", "Ditolak"]
        },
        title:{
            text: "Statistik Permohonan Informasi",
            floating: true,
            align: "center",
            style: {
                fontSize: '16px',
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        }
    }

    const series2 = [
        {
            name : "Statistik Permohonan Informasi",
            data: [16, 7, 121, 12],
        }
    ]


    return (
        <div className="content w-full flex flex-col md:items-center md:m-4">
            {/* <BoxHeader title="Statistik" /> */}
            <div className="flex flex-col divide-y my-5">
                {/* PC */}
                <div className="hidden md:flex">
                    <Chart 
                        options={options1}
                        series={series1}
                        type="bar"
                        width="800"
                    />
                </div>
                <div className="mt-10 hidden md:flex">
                    <Chart 
                        options={options2}
                        series={series2}
                        type="bar"
                        width="800"
                    />
                </div>
                {/* HP */}
                <div className="md:hidden flex">
                    <Chart 
                        options={options1_hp}
                        series={series1}
                        type="bar"
                        width="360"
                    />
                </div>
                <div className="mt-10 md:hidden flex">
                    <Chart 
                        options={options2_hp}
                        series={series2}
                        type="bar"
                        width="360"
                    />
                </div>
            </div>
        </div>
    )
}

export default Statistik;