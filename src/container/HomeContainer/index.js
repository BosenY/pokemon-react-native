// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import data from "./data";

 interface Props {
	navigation: any,
	mainStore: any,
}
 interface State {}

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	componentWillMount() {
		this.props.mainStore.fetchItems(data);
	}
	render() {
		return <Home navigation={this.props.navigation} />;
	}
}
