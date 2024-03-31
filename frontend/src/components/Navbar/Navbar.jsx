import React from 'react';
const MenuLinks = [
  {
    id:1,
    name: "Home",
    link: "/#",
  },
  {
    id:2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id:1,
    name: "About",
    link: "/#about",
  },
  {
    id:1,
    name: "Blogs",
    link: "/#blog",
  },
]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container">
                {/* Logo and Links section */}
                <div className='flex items-center gap-4'>
                  <a href="#"
                  className='text-primary font-semibold -tracking-widest text-2xl uppercase
                  sm:text-3xl '
                  >
                    Eshop
                  </a>
                  {/* Menu Items */}
                  <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                      {
                        MenuLinks.map((data, index) =>(
                          <li key={index}>
                            <a href={data.link}
                            className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                            >{data.name}</a>
                          </li>    
                        ))}
                    </ul>
                  </div>
                </div>
                {/* Navbar Right Section */}
                <div >
                  {/* search bar section */}
                  <div>
                    <input type="text"
                    placeholder='search'
                    className='' />
                  <IoMdSearch/>
                  </div>
                   {/* Dark Mode section */}
                  <div></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;