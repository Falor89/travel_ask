import { createSlice } from "@reduxjs/toolkit";
import { messages } from "../../../utils/messages";
import createNewDate from "../../../utils/newDate";

const initialState = {
    messages: messages,
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        create(state, { payload }) {
            state.messages.push({
                role: payload.role,
                text: payload.text,
                date: createNewDate(),
                avatar: 'https://i.pravatar.cc/300',
            })
        }
    }
})

const { actions, reducer } = messagesSlice;

export const { create } = actions;

export default reducer

