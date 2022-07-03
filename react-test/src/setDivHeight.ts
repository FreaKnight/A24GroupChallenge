// Teaches Typescript about setDivHeight
declare global {
	interface Window {
		setDivHeight: (height: number) => void;
	}
}

let divHeight;
window.setDivHeight = (height: number) => divHeight = height;

export {};