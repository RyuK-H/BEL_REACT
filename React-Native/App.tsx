import React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
import { SCButton } from './SCButton';

export default function App() {
	return (
		<View style={{ marginTop: 120 }}>
				<SCButton/>
				<SCButton gray/>
				<SCButton red/>
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
