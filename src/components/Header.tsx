import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

type HeaderProps = {
  searchQuery: string
  setSearchQuery: (value: string) => void
}

function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [input, setInput] = useState<string>(searchQuery)

  const handleSearch = () => {
    setSearchQuery(input)
  }

  return (
    <header className="header">
      {/* LEFT - LOGO */}
      <div className="logo">
        <NavLink to="/">🎬 MovieDB</NavLink>
      </div>

      {/* MIDDLE - NAV */}
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/now-playing">Now Showing</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      {/* RIGHT - SEARCH */}
      <div className="search">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}

export default Header;