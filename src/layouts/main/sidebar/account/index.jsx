import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "./more";

export default function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left  items-center transition-colors outline-none">
          <img
            src={account.avatar}
            className="w-10 h-10 rounded-full "
            alt="profie_avatar"
          />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]"> {account.fullname}</h6>
            <div className="text-[color:var(--color-base-secondary)]">@{account.username}</div>
          </div>

          <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
            <path
             fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <PopoverPanel className="absolute bottom-[80px] -translate-y-2 py-3 w-[300px] z-[1] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl">
            {({ close }) => <More close={close} />}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
