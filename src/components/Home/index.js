import React, { useState } from 'react'
import axios from 'axios';
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Form, FormWrapper, FormDiv, FormInput, FormLabel, FormBtn, FormH1, FormBtnWrapper, FormTextarea, FormFileInput, FormDateInput } from './HomeElements'

const Home = () => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [cause, setCause] = useState("");
    const [type, setType] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [image, setImage] = useState("");
    const [reportID, setReportID] = useState("");

    function sendData() {
        axios.post("http://localhost:5000/api/reports", {
            reportID: reportID,
            location: location,
            date: date,
            cause: cause,
            type: type,
            vehicle: vehicle,
            image: image
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Navbar />

            <FormWrapper>
                <FormH1>Enter Your Report Details</FormH1>
                <Form>
                    <FormDiv>
                        <FormLabel>Report ID</FormLabel>
                        <FormInput
                            type="text"
                            name="reportID"
                            placeholder="Enter an ID"
                            value={reportID}
                            onChange={(e) => setReportID(e.target.value)}
                            required
                        />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Location</FormLabel>
                        <FormInput
                            type="text"
                            name="location"
                            placeholder="Enter your location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Date</FormLabel>
                        <FormDateInput
                            type="date"
                            name="date"
                            placeholder="dd-mm-yyyy"
                            min="1997-01-01"
                            max="2030-12-31"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Cause For Accident</FormLabel>
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
                        <FormLabel>Type Of Accident</FormLabel>
                        <FormInput
                            type="text"
                            name="type"
                            placeholder="Type of accident"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Type Of Vehicle</FormLabel>
                        <FormInput
                            type="text"
                            name="vehicle"
                            placeholder="Type of vehicle"
                            value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                            required
                        />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Upload Image Here</FormLabel>
                        <FormFileInput
                            type="file"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </FormDiv>
                    <FormBtnWrapper>
                        <FormBtn type="reset">
                            Clear
                        </FormBtn>
                        <FormBtn type="submit" onSubmit={sendData}>
                            Submit
                        </FormBtn>
                    </FormBtnWrapper>
                </Form>
            </FormWrapper>

            <Footer />
        </>
    )
}

export default Home