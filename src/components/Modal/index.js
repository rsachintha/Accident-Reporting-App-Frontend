import React, { useState } from 'react'
import axios from 'axios';
import { Form, FormDiv, FormInput, FormLabel, FormTextarea, Container, Wrapper, Footer, Body, CloseButton, Button } from './ModalElements';

const Modal = ({ closeModal }) => {
    const [reportID, setReportID] = useState("");
    const [cause, setCause] = useState("");
    const [type, setType] = useState("");

    const reportUpdate = (reportID, e) => {
        e.preventDefault();
        axios.patch(`url/${reportID}`, {
            cause: cause,
            type: type,
        })
            .then(res => console.log("Updated Successfully!!!", res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <CloseButton onClick={() => closeModal(false)}>X</CloseButton>
                    <Body>
                        <Form>
                            <FormDiv>
                                <FormLabel>ID</FormLabel>
                                <FormInput
                                    type="text"
                                    name="reportID"
                                    placeholder="Report ID"
                                    value={reportID}
                                    onChange={(e) => setReportID(e.target.value)}
                                    required
                                />
                            </FormDiv>
                            <FormDiv>
                                <FormLabel>Cause</FormLabel>
                                <FormTextarea
                                    type="textarea"
                                    name="cause"
                                    placeholder="Cause for accident..."
                                    value={cause}
                                    onChange={(e) => setCause(e.target.value)}
                                    required
                                />
                            </FormDiv>
                            <FormDiv>
                                <FormLabel>Type</FormLabel>
                                <FormInput
                                    type="text"
                                    name="type"
                                    placeholder="Type of accident"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                />
                            </FormDiv>
                            <Footer>
                                <Button onClick={() => closeModal(false)}>Cancel</Button>
                                <Button type="submit" onSubmit={(e) => reportUpdate(reportID, e)}>Submit</Button>
                            </Footer>
                        </Form>
                    </Body>
                </Wrapper>
            </Container>
        </>
    )
}

export default Modal