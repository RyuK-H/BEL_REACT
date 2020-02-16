import React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
import './Button.scss';

export default function App() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ flex: 1, marginRight: 10 }}>
				<Button title="Save" onPress={() => {}}></Button>
			</View>
			<View style={{ flex: 1 }}>
				<Button title="Cancel" onPress={() => {}}></Button>
			</View>
			<TouchableOpacity
				onPress={() => {
					/* do this */
				}}
			>
				<View
					style={{
						backgroundColor: 'red',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 15,
					}}
				>
					<Text style={{ color: 'white' }}>Button</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
