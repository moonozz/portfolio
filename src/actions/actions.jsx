import { createAction } from '@reduxjs/toolkit';

const setBack = createAction('back/setBack');
const setPosition = createAction('position/setPosition');
const setProject = createAction('project/setProject');

export { setBack, setPosition, setProject };
