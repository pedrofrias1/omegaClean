
/*  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function Form() {
    return (
        <form>
            <div className="space-y-12 pt-24">
                <div className="border-b p-4 elementor-widget-wrap pb-12 flex justify-around align-center md-form">

                    <div className="text-form sm-form flex flex-col align-center justify-center text-start">
                        <h3 className="font-h3 title-cont">¿Tenes alguna consulta?</h3>
                        <div className="content-text w-100">
                            <p className="p-elementor">Podrás enviar tu consulta completando el formulario con los datos indicados y respoderemos a la brevedad.</p>
                        </div>

                    </div>

                    <div className=" grid grid-row-2 gap-x-2 gap-y-4 sm:grid-row-2">

                        <div className="sm:col-span-6 input-cont">
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Nombre Completo"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6 input-cont">
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-6 input-cont">
                            <div className="mt-2">
                                <input
                                    id="celular"
                                    name="celular"
                                    type="phone"
                                    placeholder="Celular"
                                    autoComplete="Celular"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6 input-cont">
                            <div className="mt-2">
                                <textarea
                                    name=""
                                    id=""
                                    rows="5"
                                    className="input-cont block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Mensaje"></textarea>
                            </div>
                        </div>

                          <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Enviar
                    </button>
                    </div>

                </div>

            </div>


        </form>
    )
}

