import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<p>app</p>
			<GlobalStyle />
		</ThemeProvider>
	);
};
