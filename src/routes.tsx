import { Component, lazy } from "solid-js";
import { HashRouter } from "@solidjs/router";

interface Props {
	children?: Component;
	root: Component;
}

const routes = [
	{
		path: "*",
		component: lazy(() => import("./pages/not_found")),
	},
	{
		path: "/",
		component: lazy(() => import("./pages/home")),
	},
];

const Routes: Component<Props> = (props) => {
	return <HashRouter root={props.root}>{routes}</HashRouter>;
};

export default Routes;
