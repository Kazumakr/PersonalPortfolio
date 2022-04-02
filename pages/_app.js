import Theme from "../styles/theme";
import "highlight.js/styles/vs2015.css";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}

export default MyApp;
