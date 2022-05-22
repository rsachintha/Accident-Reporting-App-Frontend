import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Container, Heading, Title, H1, Table, Thead, Th, Tbody, Tr, Td, Button, TdStatus } from './MyReportsElements'
import Modal from '../Modal';

const MyReports = () => {

    const [datas, setDatas] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/api/reports')
            .then(res => {
                console.log(res);
                setDatas(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const reportDelete = (reportID, e) => {
        e.preventDefault();
        axios.delete(`url/${reportID}`)
            .then(res => console.log("Deleted Successfully!!!", res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />

            <Container>
                {openModal && <Modal closeModal={setOpenModal} />}
                <Heading>
                    <Title>
                        <H1>My Reports</H1>
                    </Title>
                </Heading>

                <Table>
                    <Thead>
                        <Th>Report Number</Th>
                        <Th>Date</Th>
                        <Th>Change</Th>
                        <Th>Status</Th>
                    </Thead>

                    {
                        datas.map(data => (

                            <Tbody>
                                <Tr>
                                    <Td key={data.reportID}>{data.reportID}</Td>
                                    <Td>{data.date}</Td>
                                    <Td>
                                        <Button onClick={() => {
                                            setOpenModal(true)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button onClick={(e) => reportDelete(data.reportID, e)}>
                                            Delete
                                        </Button>
                                    </Td>
                                    <TdStatus>Pending</TdStatus>
                                </Tr>
                            </Tbody>
                        ))
                    }
                </Table>
            </Container>

            <Footer />
        </>
    )
}

export default MyReports