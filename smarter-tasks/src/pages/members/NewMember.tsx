import { Fragment, useState } from "react";
import { AddMember } from "../../context/members/actions"; //
import { useMemberDispatch } from "../../context/members/context"; //
import { Dialog } from "@headlessui/react"; //
import { Transition } from "@headlessui/react"; //
import { useForm } from "react-hook-form"; //
import { SubmitHandler } from "react-hook-form"; //

type Inputs = {
  email: string;
  password: string;
  name: string;
};

export default function NewMember() {
  const [error, setError] = useState<string | null>(null);

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
      setError(res.error as string | null);
    }
  };

  return (
    <>
      <button id="new-member-btn" type="button" onClick={openM}>
        New Member
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-10"
          onClose={closeM}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl my-2 font-medium leading-6 text-gray-900"
                >
                  Create new user
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-2 space-y-4"
                >
                  <div className="flex items-center gap-2 justify-between">
                    {error && <span>{error}</span>}
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      autoFocus
                      {...register("name", { required: true })}
                      className={`w-full p-2  border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.name ? "error-field" : ""
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      autoFocus
                      {...register("email", { required: true })}
                      className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        
                    input-field ${errors.email ? "error-field" : ""}`}
                    />
                  </div>

                  <div className="flex items-center gap-2 justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      autoFocus
                      {...register("password", { required: true })}
                      className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                     input-field ${errors.password ? "error-field" : ""}`}
                    />
                  </div>
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
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
