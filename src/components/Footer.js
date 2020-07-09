import React from "react"
import { Segment, Container, Grid, List, Header, Icon} from "semantic-ui-react"

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
                            <Icon name="github" size="huge"/>
                        </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <div style={{marginLeft: "120px"}}>
                            <Icon name="linkedin" size="huge"/> 
                            <Icon name="linkedin"size="huge"/>
                        </div> 
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <div style={{marginLeft: "120px"}}>
                            <Icon name="mail" size="huge"/>
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
        )
    }
}

export default Footer;