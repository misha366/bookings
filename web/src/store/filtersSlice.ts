import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  trainingType: string | null;
  trainer: string | null;
  location: string | null;
};

const initialState: FiltersState = {
  trainingType: null,
  trainer: null,
  location: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTrainingType: (state, action: PayloadAction<string | null>) => {
      state.trainingType = action.payload;
    },
    setTrainer: (state, action: PayloadAction<string | null>) => {
      state.trainer = action.payload;
    },
    setLocation: (state, action: PayloadAction<string | null>) => {
      state.location = action.payload;
    },
  },
});

export const { setTrainingType, setTrainer, setLocation } = filtersSlice.actions;

export default filtersSlice.reducer;
