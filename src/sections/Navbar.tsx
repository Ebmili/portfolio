import Link from "next/link";

function Navbar() {

  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "My Projects", link: "/#projects" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <nav>
      <div className="wrapper">
      <a href="https://google.com">
          </a>
      <div className="brand">
    
      </div>
      <div className="nav-items">
      <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li
                key={name}
                className="nav-items-list-item"
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
      </div>
      </div>
      
      </nav>
  )
}

export default Navbar