import React from "react";
import ReactDOM from 'react-dom';
import App from "./App"
import "./style.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)


ReactDOM.render(<App />, document.getElementById("root"));