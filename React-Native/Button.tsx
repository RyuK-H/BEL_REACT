import React from 'react';
import { Button } from 'react-native';

import { IComponentProps } from './types';

interface IButtonProps extends IComponentProps {
	className?: string;
	gray?: boolean;
	red?: boolean;
}

export const ZButton = (props: IButtonProps) => {
	return <Button title="Save" onPress={() => {}}></Button>
;
};
