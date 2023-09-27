import { Fragment, useState } from "react";
import { AddMember } from "../../context/members/action";
import { useMemberDispatch } from "../../context/members/context";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  name: string;
};

export default function NewMember() {
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const openM = () => {
    setOpen(true);
  };

  const closeM = () => {
    setOpen(false);
  };

  const DispatchMembers = useMemberDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password, name } = data;

    const res = await AddMember(DispatchMembers, {
      name,
      email,
      password,
    });

    if (res.ok) {
      closeM();
    } else {
      setError(res.error as React.SetStateAction<null>);
    }
  };

  return (
    <>
      <button id="new-member-btn" type="button" onClick={openM}>
        New Member
      </button>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={closeM}>
          <div className="min-h-screen flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                  Create new member
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {error && <span className="text-red-500">{error}</span>}
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter member name..."
                    autoFocus
                    {...register("name", { required: true })}
                    className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email..."
                    autoFocus
                    {...register("email", { required: true })}
                    className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    autoFocus
                    {...register("password", { required: true })}
                    className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      id="create-member-btn"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={closeM}
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
