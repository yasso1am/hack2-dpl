import React from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Divider,
  Image,
  List,
} from 'semantic-ui-react'


class Menu extends React.Component {
  
  foods = () => {
    const { foods } = this.props
    return foods.map ( food =>
      <List.Item key={food.id}>
        <Image size='small' src={food.image} />
        <List.Content>
          <List.Header as='h4'>{food.name}</List.Header>
          <List.Description>
            {food.description}
          </List.Description>
          <List.Description>
           {food.category}
          </List.Description>
          <List.Description>
           ${food.price}
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }

  render() {
    return(
      <Container>
        <Header textAlign="center" as="h1"> Menu </Header>
        <Divider />
        <List>
          {this.foods()}
        </List>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { foods } = state
  return {
    foods,
  }
}

export default connect(mapStateToProps)(Menu)