import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends React.Component {
	state = {
        toggle: true,
        selectedChar: 130
	};
	onToggle = () => {
		this.setState((state) => {
			return {
				toggle: !state.toggle,
			};
		});
    }
    
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

	render() {
		const char = this.state.toggle ? <RandomChar /> : null;
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							{char}
							<button className="toggle-btn" onClick={this.onToggle}>
								Toggle random character
							</button>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<ItemList onCharSelected={this.onCharSelected}/>
						</Col>
						<Col md="6">
							<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
