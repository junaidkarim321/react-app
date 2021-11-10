import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps';
import {
    Container,
    Headcontainer,
    H2,
    Span,
    Parm,
    Mapcontainer
} from './Elements'
function Mapp() {
    return (
        <Container>
            <Headcontainer>
                <H2>where we are search in <Span> map</Span></H2>
                <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
            </Headcontainer>

            <Mapcontainer>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </Mapcontainer>
        </Container>
    )
}

export default GoogleApiWrapper({
    apiKey:("AIzaSyCBmJ_g-jx3kd4oboQitktKfrwwA78YSIQ") 
})(Mapp) 