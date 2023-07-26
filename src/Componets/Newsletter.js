import {React , useEffect, useState} from 'react'
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ( {onValidated, status, message}) => {
    const [email,setEmail] = useState("");
    useEffect(() =>{
         if(status === 'success') clearFeilds()

    }, [status])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        email &&
        email.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFeilds = () =>{
        setEmail('')
    }
  return (
    <Col lg ={12}>
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to my Newsletter</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                    {status === 'success' && <Alert variant='success'>{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className='new-email-bx'>
                            <input value={email}  type='email' onChange={evt => setEmail(evt.target.value)} placeholder='Email Address'/>
                            <button type='Submit'>Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
    )
}