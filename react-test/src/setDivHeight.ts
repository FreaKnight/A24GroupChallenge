// Teaches Typescript about setDivHeight
declare global {
	interface Window {
		setDivHeight: (height: number) => void;
	}
}

let divHeight: number | string = 100;
window.setDivHeight = (height: number) => divHeight = height;

export { divHeight };