import getMuiTheme from 'material-ui/styles/getMuiTheme';

const primaryColor = '#1db954';
const textColor = '#000';
const darkGray = '#282828';
const gray = 'gray';
const black = '#fff';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: primaryColor,
		primary2Color: primaryColor,
		primary3Color: primaryColor,
		accent1Color: primaryColor,
		accent2Color: primaryColor,
		accent3Color: primaryColor,
		textColor,
		alternateTextColor: black,
		canvasColor: black,
		borderColor: darkGray,
		disabledColor: gray,
		pickerHeaderColor: primaryColor,
		clockCircleColor: primaryColor,
		shadowColor: textColor
	},
	appBar: {
		color: darkGray,
		titleFontWeight: 'bold'
	},
	snackbar: {
		textColor,
		backgroundColor: black,
		actionColor: primaryColor
	},
	textField: {
		borderColor: gray
	}
});

export default muiTheme;
