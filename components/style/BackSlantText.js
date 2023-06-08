import React from 'react';
import { Text } from 'react-native';

////////////////////////////////////////////////////////////////////////
// Custom backslant text component that accept all the style props
export default function (props) {
    return (
        <Text
            {...props}
            style={[props.style, { fontFamily: 'Munch-Backslant' }]}
        />
    );
}
