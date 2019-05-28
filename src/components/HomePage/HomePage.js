import React from 'react';
import NewAddedItems from './NewAddedItems'
import SingleItemView from './SingleItemView'
import { Container, Media, Row, Col } from 'reactstrap';

export default class HomePage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      todayItems:[
        {  name: "Peete",
          seller:"Keller",
          bio:"Peter likes in the but",
          price: "2.300.00",
          image:"https://i.dailymail.co.uk/i/pix/2015/08/09/16/2B377C4E00000578-0-image-a-113_1439132603411.jpg"},
        { name: "PeterKeller",
          seller:"the SheepShagger",
          bio:"Peter still likes it in the jacksie",
          price: "1.300.00",
          image:"https://i.dailymail.co.uk/i/pix/2015/08/09/16/2B377C0C00000578-0-image-a-123_1439132638416.jpg"}
      ],
      selectedItem : null
    };
  }

  _detailedInfo = selectedItem => {
    this.setState({ selectedItem })
  }

  _goBack = () => {
    this.setState({ selectedItem: null })
  }

  render(){
    return(
      <Container>
        <Row>
          <Col lg="3">Today most sold item: </Col>
          <Col lg="6"></Col>
        </Row>
        {
        this.state.selectedItem === null
        ? <NewAddedItems images={this.state.todayItems} handleClick={this._detailedInfo} />
        : <SingleItemView selectedItem={this.state.selectedItem} goBack={this._goBack} />
        }
      </Container>
    )
  }
}
