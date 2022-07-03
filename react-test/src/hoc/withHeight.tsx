import { ComponentType } from "react";

interface WithHeightProps {
	height: number | string;
}

const withHeight = (WrappedComponent: ComponentType<WithHeightProps>) => {
	return (props: WithHeightProps) => {
		const height = props.height;
		return (
			<WrappedComponent height={height} />
		);
	};
}

export default withHeight;