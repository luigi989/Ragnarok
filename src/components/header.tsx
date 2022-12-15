import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='flex mx-auto w-11/12'>
      <Link to={'/'}>
        <img src={'/images/pattern.png'} alt="Logo" />

      </Link>
      {/* <form id="searchbar_form" className=''>
              <input type="text" placeholder="Search..." name="search"></input>
              <button type="submit">Submit</button> 
            </form> */}
    </header>
  );
}