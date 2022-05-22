import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container, Heading, H1 } from './AnalyzationElements';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';


import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Analyzation = () => {

    const [chart, setChart] = useState({})

    var baseUrl = "http://localhost:5000/api/reports";


    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${baseUrl}`, {
                method: 'GET',
            })
                .then((response) => {
                    if (response.ok) {
                        response.json().then((json) => {
                            console.log(json.data);
                            setChart(json.data)
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                });
        };
        fetchCoins()
    }, [baseUrl])

    console.log("chart", chart);
    var data = {
        labels: chart?.coins?.map(x => x.type),
        datasets: [{
            label: `${chart?.coins?.length} Types Available`,
            data: chart?.coins?.map(x => x.type),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    }

    return (
        <Container>
            <Navbar2 />
            <Heading>
                <H1>Here is the analyzation for type of accidents</H1>
            </Heading>
            <Pie
                data={data}
                height={400}
                options={options}

            />
            <Footer />
        </Container>
    )
}

export default Analyzation