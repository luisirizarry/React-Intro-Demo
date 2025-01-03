const Animal = (props) => {
	return (
		<ul>
			<li>{props.emoji}</li>
			<li>Name: {props.name}</li>
			<li>Species: {props.species}</li>
			<li>Cute?: {props.isCute ? 'Yes! :))' : 'No! :('}</li>
		</ul>
	)
}