import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: '#fff',
		textColor: '#fff'
	},
	appBar: {
		color: '#282828',
		textColor: '#fff',
		titleFontWeight: 'bold'
	},
	textField: {
		textColor: '#fff',
		hintColor: '#fff',
		floatingLabelColor: '#fff',
		focusColor: '#fff',
		borderColor: '#fff'
	},
	drawer: {
		color: '#282828'
	},
	icon: {
		color: '#fff',
		backgroundColor: '#fff'
	}
});

export default muiTheme;
