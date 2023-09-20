import { createAction } from '@reduxjs/toolkit';

const setBack = createAction('back/setBack');
const setPosition = createAction('position/setPosition');

export { setBack, setPosition };
