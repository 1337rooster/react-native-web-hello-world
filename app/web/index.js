import React          from 'react';
import { render }     from 'react-dom';
import Root           from './containers/Root';
import configureStore from '../store/configureStore';

import WebSearchBox from '../color/WebSearchBox';

import Colors from '../color/colors'
import ColorListItem from '../color/ColorListItem'

// load our css
require('./styles/style.less');

const ColorSearchBox = WebSearchBox(ColorListItem);

const store = configureStore();
const rootElement = document.getElementById('root');

render( <ColorSearchBox searchStore={new Colors()}/>, rootElement );

/*
render( <Root store={store} />, rootElement );
*/

