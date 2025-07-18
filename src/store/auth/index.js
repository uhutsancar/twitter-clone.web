import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: 'uhutsancar',
    fullname: 'Uhut Sancar',
    avatar: 'https://pbs.twimg.com/profile_images/1803545708026363905/fGEDZzvn_normal.png'
  },
  accounts: [
    {
     
          id: 1,
    username: 'uhutsancar',
    fullname: 'Uhut Sancar',
    avatar: 'https://pbs.twimg.com/profile_images/1803545708026363905/fGEDZzvn_normal.png'

    },

    {
          id: 2,
    username: 'sancar',
    fullname: 'Sancar',
    avatar: 'https://pbs.twimg.com/profile_images/1803545708026363905/fGEDZzvn_normal.png'
    }

  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //stateleri manipule etme
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload == state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccount, _setCurrentAccount } =  auth.actions;
export default auth.reducer;