import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// screens
import { LoginScreen } from '../../screens/login-screen';
import { SuccessSignUpScreen } from '../../screens/success-sign-up-screen';

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessSignUpScreen} />
        </Stack.Navigator>
    );
};
