import * as React from "react";

export interface AppInterface {
  userName: string;
  lang: string;
}
export const App = (props: AppInterface) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);