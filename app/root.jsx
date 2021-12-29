import { Links, Meta, Outlet, ScrollRestoration, LiveReload } from 'remix'
import styles from './tailwind.css'

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
	]
}

export function meta() {
	return {
		title: 'Avior',
		description: 'Avior',
	}
}

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}
