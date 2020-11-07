import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends React.Component {
	state = {
		toggle: true,
	};
	onToggle = () => {
		this.setState((state) => {
			return {
				toggle: !state.toggle,
			};
		});
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
							<ItemList />
						</Col>
						<Col md="6">
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
