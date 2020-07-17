import React from "react"
import { Segment, Container, Grid, List, Header, Icon} from "semantic-ui-react"
import {Link} from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return (
        <div className="footer">
            <Segment inverted vertical style={{ padding: '1em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                        <div style={{marginLeft: "120px"}}>
                            <a href="https://github.com/coDeguZo/HealthCare-Tracker-Frontend"><Icon name="github" size="huge"/></a>
                        </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <div style={{marginLeft: "120px"}}>
                            <a href="https://www.linkedin.com/in/sebastien-kai-auyong-dornel"><Icon name="linkedin" size="huge"/></a>
                            <a href="https://www.linkedin.com/in/uzoma-ariguzo/"><Icon name="linkedin"size="huge"/></a>
                        </div> 
                        </Grid.Column>
                        {/* <Grid.Column width={5}>
                        <div style={{marginLeft: "120px"}}>
                            <Icon name="mail" size="huge"/>
                        </div>
                        </Grid.Column> */}
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
        )
    }
}

export default Footer;