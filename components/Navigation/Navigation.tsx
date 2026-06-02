"use client";

export default function Navigation() {
  return (
    <>
      <aside className="sidebar">
        <h2 className="logo">TikTok</h2>

        {/* <div className="search-box">
          <input type="text" placeholder="Tìm kiếm" />
        </div> */}

        <button>🏠 Home</button>
        <button>🔍 Explore</button>
        <button>👤 Profile</button>
      </aside>

      <nav className="bottom-nav">
        <button>🏠</button>
        <button>🔍</button>
        <button>👤</button>
      </nav>
    </>
  );
}
