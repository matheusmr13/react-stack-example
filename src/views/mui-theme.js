import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: '#1db954',
		primary2Color: '#1db954',
		primary3Color: '#1db954',
		accent1Color: '#1db954',
		accent2Color: '#1db954',
		accent3Color: '#1db954',
		textColor: '#000',
		alternateTextColor: '#fff',
		canvasColor: '#fff',
		borderColor: '#282828',
		disabledColor: 'gray',
		pickerHeaderColor: '#1db954',
		clockCircleColor: '#1db954',
		shadowColor: '#000'
	},
	appBar: {
		color: '#282828',
		titleFontWeight: 'bold'
	},
	snackbar: {
		textColor: '#000',
		backgroundColor: '#fff',
		actionColor: '#1db954'
	}
});

export default muiTheme;
