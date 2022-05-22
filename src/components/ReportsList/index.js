import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar2 from '../Navbar2'
import Footer from '../Footer'
import { CardWrapper, Card, CardImgWrapper, CardImg, CardDescription, BtnWrapper, NavLink, P, CardTitle } from './ReportsListElements';

const ReportsList = () => {

    const [reports, setReports] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/reports')
            .then(res => {
                console.log(res);
                setReports(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <Navbar2 />

            <CardWrapper>

                {reports.map((report) => (
                    <Card key={report._id}>
                        <CardImgWrapper>
                            <CardImg src={report.image} />
                        </CardImgWrapper>
                        <CardDescription>
                            <CardTitle>{report.reportID}</CardTitle>
                            <P>{report.cause}</P>
                        </CardDescription>
                        <BtnWrapper>
                            <NavLink to="/singlereport">
                                More
                            </NavLink>
                        </BtnWrapper>
                    </Card>
                ))}

            </CardWrapper>

            <Footer />
        </>
    )
}

export default ReportsList
