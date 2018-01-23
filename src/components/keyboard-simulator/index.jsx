import React, { Component } from 'react';


import './keyboard-simulator.css';

// if (values) {

const TIMING_PER_STATUS = {
	WRITING: 100,
	IDLE: 4000,
	ERASING: 50
};

class KeyboardSimulator extends Component {
	state = {
		isWriting: true,
		isIdleing: true,
		word: 0,
		character: 0,
		currentText: ''
	}

	componentDidMount() {
		this.updateWriting(TIMING_PER_STATUS.WRITING);
	}

	updateWriting(timingToNextAction) {
		const { character, word, isWriting, isIdleing } = this.state;
		const { values } = this.props;

		const newState = { ...this.state };

		setTimeout(() => {
			const shouldIdle = character === values[word].length;

			let timing;
			if (shouldIdle) {
				timing = TIMING_PER_STATUS.IDLE;
			} else if (isWriting) {
				timing = TIMING_PER_STATUS.WRITING;
			} else {
				timing = TIMING_PER_STATUS.ERASING;
			}

			if (shouldIdle) {
				newState.isIdleing = true;
			} else {
				newState.isIdleing = false;
			}
			newState.currentText = values[word].substring(0, character);

			if (isWriting) {
				newState.character += 1;
			} else {
				newState.character -= 1;
			}

			if (newState.character === values[word].length && isWriting) {
				newState.isWriting = false;
			} else if (newState.character === 0 && !isWriting) {
				newState.isWriting = true;
				newState.word += 1;
			}

			if (newState.word === values.length) {
				newState.word = 0;
			}
			this.setState(newState, () => this.updateWriting(timing));
		}, timingToNextAction);
	}

	render() {
		const { isWriting, isIdleing, currentText } = this.state;
		const { text } = this.props;

		return (
			<div className="keyboard-simulator">
				<span className="keyboard-simulator__text">{text} <span className="keyboard-simulator__inputing">{currentText}</span></span>
				<span className={`keyboard-simulator__cursor${isIdleing ? ' keyboard-simulator__cursor--idle' : ''}`} />
			</div>
		);
	}
}
 
export default KeyboardSimulator;