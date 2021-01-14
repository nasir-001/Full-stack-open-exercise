import React, { useCallback } from 'react';
import { TouchableWithoutFeedback, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import { t } from 'react-native-tailwindcss';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username must be greater or equal to 5')
    .max(20, 'Username must not be greater than 20')
    .required(),
  password: Yup.string()
    .min(5, 'Password must be greater or equal to 5')
    .max(20, 'Password must not be greater than 20')
    .required()
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = useCallback(async ({ username, password }) => {
    console.log(username, password);
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [signIn, history.push]);

  return (
    <Formik
        initialValues={{ 
          username: '',
          password: ''
        }}

        validationSchema={SignInSchema}
        
        onSubmit = {onSubmit}
      >

      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
        <View style={[t.pL10, t.pR10, t.pT24]}>
          
          <TextInput
            style={[t.border, t.rounded, t.pB3, t.pT3, t.borderGray600, t.text2xl, t.textCenter]}
            onChangeText={handleChange('username')}
            placeholder="Username"
            name="username"
            onBlur={handleBlur('email')}
            value={values.username}
            testID="usernameField"
          />
          {errors.username &&
          <Text style={[t.textRed500]}>{errors.username}</Text>
          }
          <TextInput
            style={[t.border, t.rounded, t.mT3, t.mB3, t.pB3, t.pT3, t.borderGray600, t.text2xl, t.textCenter]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            name="password"
            placeholder="Password"
            value={values.password}
            testID="passwordField"
          />
          {errors.password &&
          <Text style={[t.textRed500]}>{errors.password}</Text>
          }
          <TouchableWithoutFeedback
            onPress={handleSubmit}
            testID="submitButton"
          >
            <Text
              style={[t.bgBlue500, t.rounded, t.mT3, t.mB3, t.pB3, t.pT3, t.borderGray600, t.text2xl, t.textCenter, t.textWhite, t.w2_3, t.selfCenter]}
            >Sign in</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;