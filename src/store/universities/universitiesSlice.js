import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUniversities } from "../../apis/universities";

let count = 0;

const initialState = {
  data: [],
};

export const fetchUniversities = createAsyncThunk(
  "universities/fetchUniversities",
  async (params) => {
    const universities = await getUniversities(params);
    return universities;
  }
);

const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    addUniversity: (state) => {
      if (state.data && state.data.length > 0) {
        state.data = [...state.data, { ...state.data[0], id: ++count }];
      }
    },
    deleteUniversity: (state) => {
      if (state.data && state.data.length > 0) {
        state.data.pop();
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.data = action.payload.map((university) => ({
          ...university,
          id: ++count,
        }));
      });
  },
});

export const selectUniversities = (state) => state.universities.data;

export const { addUniversity, deleteUniversity } = universitiesSlice.actions;

export default universitiesSlice.reducer;
