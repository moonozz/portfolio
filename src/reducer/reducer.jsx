import { createReducer, combineReducers } from '@reduxjs/toolkit';
// 이것에 대한 대응 방안으로 localStorage 또는 session에 저장하고자 하는 reducer state를 저장하여, 새로고침 하여도 저장공간에 있는 데이터를 redux에 불러오는 형식으로 이루어집니다.
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { setBack, setPosition, setProject } from '../actions/actions';

// 상태 정의
const initialState = {
  back: 'main',
  position: 0,
  project: {
    id: '',
    imgUrl: '',
    items: [],
    title: '',
    link: '',
    github: '',
    figma: '',
    notion: '',
    date: '',
    info: '',
    infoDetail: [],
    skill: [],
    mainImg: '',
    projectImgPC: [],
    projectGif: [],
    projectImgMobile: [],
  },
};

const backReducer = createReducer(initialState.back, builder => {
  builder.addCase(setBack, (state, action) => action.payload);
});

const positionReducer = createReducer(initialState.position, builder => {
  builder.addCase(setPosition, (state, action) => action.payload);
});

const projectReducer = createReducer(initialState.project, builder => {
  builder.addCase(setProject, (state, action) => action.payload);
});

const rootReducer = combineReducers({
  back: backReducer,
  position: positionReducer,
  project: projectReducer,
});

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage, // 사용할 스토리지 정의
  // 3개의 reducer 전부 local에 저장하겠다.
  whitelist: ['back', 'position', 'project'],
  // blacklist -> 그것만 제외합니다
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// reducer와 위에서 설정 한 persist설정을 합쳐요

export default persistedReducer;
