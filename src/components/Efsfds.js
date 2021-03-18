import React from 'react';
import atomize from "@quarkly/atomize";

const Efsfds = props => <div {...props}>
	Say hello Efsfds
</div>;

export default atomize(Efsfds)({
	name: "Efsfds",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Efsfds — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});