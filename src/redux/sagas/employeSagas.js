import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../constants/actionConstants";
import * as apiServices from "../../services/apiService";

function* GetEmpolyeData(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    const getEmpolyeData = async () => {
      const response = await apiServices.getUsers();
      return response;
    };
    const response = yield call(getEmpolyeData);
    if (response.status === 200) {
      yield put({
        type: actions.getEmployeAction.GET_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.getEmployeAction.GET_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.getEmployeAction.GET_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.getEmployeAction.GET_EMPLOYE_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

function* AddEmpolyeData(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    const AddEmpolyeData = async () => {
      const response = await apiServices.addUsers(action.payload);
      return response;
    };
    const response = yield call(AddEmpolyeData);
    if (response.status === 200) {
      yield put({
        type: actions.addEmployeAction.ADD_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.addEmployeAction.ADD_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.addEmployeAction.ADD_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.addEmployeAction.ADD_EMPLOYE_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}
function* DeleteEmpolyeData(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    const DeleteEmpolyeData = async () => {
      console.log("sagas", action.payload);
      const response = await apiServices.deleteUserData(action.payload);
      return response;
    };
    const response = yield call(DeleteEmpolyeData);
    if (response.status === 204) {
      yield put({
        type: actions.deleteEmployeAction.DELETE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.deleteEmployeAction.DELETE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.deleteEmployeAction.DELETE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.deleteEmployeAction.DELETE_EMPLOYE_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

function* GetIDEmpolyeData(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    const GetIDEmpolyeData = async () => {
      const response = await apiServices.getIDUsers(action.payload);
      return response;
    };
    const response = yield call(GetIDEmpolyeData);
    if (response.status === 200) {
      yield put({
        type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.getEmployeAction.GET_EMPLOYE_FAILED,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

function* UpdateEmpolyeData(action) {
  // Shoud be in try
  // Need to validate if we got the response
  try {
    const UpdateEmpolyeData = async () => {
      const response = await apiServices.updateUserData(action.payload);
      return response;
    };
    const response = yield call(UpdateEmpolyeData);
    if (response.status === 201) {
      yield put({
        type: actions.updateEmployeAction.UPDATE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: true,
          apiGetDataFail: false,
        },
      });
    } else if (response === null && undefined) {
      yield put({
        type: actions.updateEmployeAction.UPDATE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: false,
        },
      });
    } else {
      yield put({
        type: actions.updateEmployeAction.UPDATE_EMPLOYE_SUCCESS,
        payload: {
          employe: response.data,
          apiLoading: false,
          apiGetDataSuccess: false,
          apiGetDataFail: true,
        },
      });
    }
  } catch (e) {
    // api in progress - State - false
    // Api is successful - State - false
    // Api failed - State - true
    yield put({
      type: actions.updateEmployeAction.UPDATE_EMPLOYE_SUCCESS,
      payload: {
        apiLoading: false,
        apiGetDataSuccess: false,
        apiGetDataFail: true,
      },
    });
  }
}

// Declare watcher
function* initializeWatcher() {
  yield takeLatest(actions.getEmployeAction.GET_EMPLOYE, GetEmpolyeData);
  yield takeLatest(
    actions.addEmployeAction.ADD_EMPLOYE_REQUESTED,
    AddEmpolyeData
  );
  yield takeLatest(
    actions.deleteEmployeAction.DELETE_EMPLOYE_REQUESTED,
    DeleteEmpolyeData
  );
  yield takeLatest(
    actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_REQUESTED,
    GetIDEmpolyeData
  );

  yield takeLatest(
    actions.updateEmployeAction.UPDATE_EMPLOYE,
    UpdateEmpolyeData
  );
}
export default initializeWatcher;
