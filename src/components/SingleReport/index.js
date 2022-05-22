import React, { useEffect, useState } from 'react'
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import axios from 'axios';
import { Container, Title, ImgWrapper, Img, P, H3, Detail, BtnWrapper, Btn, DetailWrapper } from './SingleReportElements';

const SingleReport = () => {
    const [datas, setDatas] = useState([])

    const singleReport = (reportID, e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/api/reports/${reportID}`)
            .then(res => {
                console.log(res.data)
                setDatas(res.data)
            })
            .catch(err => console.log(err))
    }

    const reportUpdateApproved = (reportID, e) => {
        e.preventDefault();
        axios.patch(`url/${reportID}`, {
            decision: "approved"
        })
            .then(res => console.log("Updated Successfully!!!", res))
            .catch(err => console.log(err))
    }

    const reportUpdateDenied = (reportID, e) => {
        e.preventDefault();
        axios.patch(`url/${reportID}`, {
            decision: "dined"
        })
            .then(res => console.log("Updated Successfully!!!", res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        singleReport()
    }, [])

    return (
        <>
            <Navbar2 />
            {
                datas.map(data => (

                    <Container>
                        <Title key={data.reportID}>{data.reportID}</Title>
                        <ImgWrapper>
                            <Img src={data.image} />
                        </ImgWrapper>
                        <P>{data.cause}</P>
                        <DetailWrapper><H3>Location:</H3><Detail>{data.location}</Detail></DetailWrapper>
                        <DetailWrapper><H3>Date:</H3><Detail>{data.date}</Detail></DetailWrapper>
                        <DetailWrapper><H3>Type Of Accident:</H3><Detail>{data.type}</Detail></DetailWrapper>
                        <DetailWrapper><H3>Type Of Vehicle:</H3><Detail>{data.vehicle}</Detail></DetailWrapper>
                        <BtnWrapper>
                            <Btn type="submit" onSubmit={reportUpdateDenied}>
                                Reject
                            </Btn>
                            <Btn type="submit" onSubmit={reportUpdateApproved}>
                                Approve
                            </Btn>
                        </BtnWrapper>
                    </Container>
                ))
            }

            <Footer />
        </>
    )
}

export default SingleReport