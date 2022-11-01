import { createRef } from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

export const navigationRef = createRef();
export const routeNameRef = createRef();

const navigationAction = (action: any) => {
  const navigation = navigationRef.current;
  if (navigation) {
    action(navigation);
  }
};

export const navigate = (routeName: any, params: any) => {
  navigationAction((navigation: any) => {
    navigation.dispatch(
      CommonActions.navigate({
        key: routeName,
        name: routeName,
        params,
      }),
    );
  });
};

export const reset = (stackName: any, params: any) => {
  navigationAction((navigation: any) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: stackName, params }],
      }),
    );
  });
};

export const changeStack = (stackName: any, routeName: any, params: any) => {
  navigationAction((navigation: any) => {
    navigation.dispatch(StackActions.replace(stackName, { screen: routeName, params }));
  });
};

export const replace = (routeName: any, params: any) => {
  navigationAction((navigation: any) => {
    navigation.dispatch(StackActions.replace(routeName, { params }));
  });
};

export const goBack = () => {
  navigationAction((navigation: any) => {
    navigation.dispatch(CommonActions.goBack());
  });
};
