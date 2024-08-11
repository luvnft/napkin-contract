'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Overlay } from '@/shared/components';
import { useAppDispatch } from '@/shared/store/hook';
import { updateUser } from '@/shared/store/slice/user';
import { toastSuccess } from '@/shared/utils/toast';

type PropTypes = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const LoginForm = ({ isVisible, setIsVisible }: PropTypes) => {
  const [fullname, setFullname] = useState('');
  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const handleSignIn = () => {
    dispatch(
      updateUser({
        data: {
          id: uuidv4(),
          fullname: fullname,
        },
      }),
    );
    toastSuccess('Signed in');
    setIsVisible(false);
  };

  return (
    <Overlay isVisible={isVisible} onClick={() => setIsVisible(false)}>
      <div className="h-full w-full flex items-center justify-center">
        <form
          className="flex flex-col w-96 h-96 gap-5 bg-black/60 rounded-2xl p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-xl text-center p-2">Login</span>
          <div className="flex flex-col gap-3 items-center justify-center p-3">
            <label htmlFor="fullname"></label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              className="resize-none w-full p-2 border-0 outline-0 rounded border-none overflow-hidden text-black text-2xl"
              placeholder=""
              onChange={handleOnChange}
            />
            <Button title="Login" onClick={handleSignIn} />
          </div>
        </form>
      </div>
    </Overlay>
  );
};
