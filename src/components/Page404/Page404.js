import React from "react";

const Page404 = ({ location }) => {
	return (
		<div>
			<h2>
				Unable to find the route for <code>{location.pathname}</code>
			</h2>
		</div>
	);
};

export default Page404;
