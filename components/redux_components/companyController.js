import { createSlice } from "@reduxjs/toolkit";
import { mock_surveys_company } from "./mock";
const initialState = {
  company: {
    surveys: [],
  },
};

const surveySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    companySurveys: (state, { payload }) => {
      state.company.surveys = payload;
    },
  },
});

const { companySurveys } = surveySlice.actions;
export const selectCompanySurveys = state => state.company

export function dispatchCompanyData() {
  return (dispatch) => {
    const surveys = mock_surveys_company;
    dispatch(companySurveys(surveys));
  };
}

export default surveySlice.reducer;
