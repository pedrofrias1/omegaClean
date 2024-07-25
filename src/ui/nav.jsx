import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import Logo from "../img/logo-omega.jpg"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"





const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Contacto', href: '/Contact', current: false },
  { name: 'Ubicación', href: '#ubicacion', current: false },
  { name: 'Marcas', href: '#empresas', current: false },
  // { name: `bi bi-cart` , href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




function Nav({ itemsMenu, allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal, }) {

  useEffect(() => {
    initMercadoPago('TEST-04e1b409-1357-4491-a085-7c7e8a70f80d', {
      locale: "es-AR",
    });
  }, [])



  const [active, setActive] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

console.log(total);
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:4000/pagos", {
        title: "omega-soluciones",
        quantity: countProducts,
        price: allProducts[0].price,
      });
      const { id } = response.data;
      
      return id;

    } catch (err) {
      console.log(err);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    
    if (id) {
      setPreferenceId(id);
    }
  };


  const onDeleteProduct = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };



  return (
    <Disclosure as="nav" className="bg-gray-800 disclosure"  >

      <div className="flex h-16 items-center justify-between nav-bar">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-between  ">
          <div className="flex  items-center">
            {/* <h4 className=' text-xl'>OMEGA</h4>
               */}

            <img
              alt="Your Company"
              src={Logo}
              className=" log-omega "
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >

                  {item.name}
                </a>
              ))}

              {itemsMenu === "commerce" ? <i className="bi bi-cart flex justify-center align-center" onClick={() => setActive(!active)}>
                <div className='count-products'>
                  <span id='contador-productos'>{countProducts}</span>
                </div>
                <div
                  className={`container-cart-products ${active ? '' : 'hidden-cart'
                    }`}
                >
                  {allProducts.length ? (
                    <>
                      <div className='row-product'>
                        {allProducts.map(product => (
                          <div className='cart-product' key={product.id}>
                            <div className='info-cart-product'>
                              <span className='cantidad-producto-carrito'>
                                {product.quantity}
                              </span>
                              <p className='titulo-producto-carrito'>
                                {product.nameProduct}
                              </p>
                              <span className='precio-producto-carrito'>
                                ${product.price}
                              </span>
                            </div>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='icon-close'
                              onClick={() => onDeleteProduct(product)}
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </div>
                        ))}
                      </div>

                      <div className='cart-total'>
                        <h3>Total:</h3>
                        <span className='total-pagar'>$ {total}</span>
                      </div>

                      <div className='flex justify-around align-center'>
                        <button className='btn-clear-all' onClick={onCleanCart}>
                          Vaciar Carrito
                        </button>
                        <div className='flex flex-col'>
                          <button className='btn-pay' onClick={handleBuy}>
                          Pagar
                        </button>

                        
                        {preferenceId &&  <Wallet initialization={{ preferenceId: preferenceId }} />}
                        </div>
                        
                        

                        

                      </div>

                    </>
                  ) : (
                    <p className='container-cart-products'>El carrito está vacío</p>
                  )}
                </div>

              </i> : ""}
            </div>
          </div>
        </div>

      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  )
}
export default Nav;