import { useState } from "react";
import ClubCard from "./ClubCard";
import "./App.css";

function App() {

  // List of clubs
  const clubs = [
    {
      id: 1,
      name: "Coding Club",
      category: "Coding",
      description: "Learn programming and software development."
    },
    {
      id: 2,
      name: "Sports Club",
      category: "Sports",
      description: "Play cricket, football and other sports."
    },
    {
      id: 3,
      name: "Arts Club",
      category: "Arts",
      description: "Learn drawing, painting, music and creativity."
    },
    {
      id: 4,
      name: "Entrepreneurship Club",
      category: "Entrepreneurship",
      description: "Learn about startups and business ideas."
    },
    {
      id: 5,
      name: "Web Development Club",
      category: "Coding",
      description: "Learn HTML, CSS, JavaScript and React."
    }
  ];

  // State for search
  const [search, setSearch] = useState("");

  // State for category
  const [category, setCategory] = useState("All");

  // State for selected club
  const [selectedClub, setSelectedClub] = useState(null);


  // Search and filter
  const filteredClubs = clubs.filter((club) => {

    const searchResult = club.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryResult =
      category === "All" ||
      club.category === category;

    return searchResult && categoryResult;
  });


  return (
    <div className="container">

      <h1>College Club Finder</h1>

      <p>
        Find clubs according to your interests.
      </p>


      {/* SEARCH UI */}

      <input
        type="text"
        placeholder="Search club..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* FILTER UI */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

        <option value="All">All Clubs</option>

        <option value="Coding">Coding</option>

        <option value="Sports">Sports</option>

        <option value="Arts">Arts</option>

        <option value="Entrepreneurship">
          Entrepreneurship
        </option>

      </select>


      <h2>Available Clubs</h2>


      {/* CONDITIONAL RENDERING */}

      {filteredClubs.length === 0 ? (

        <p className="no-clubs">
          No clubs found.
        </p>

      ) : (

        <div>

          {/* LISTS + COMPONENT REUSE */}

          {filteredClubs.map((club) => (

            <ClubCard
              key={club.id}
              club={club}
              onViewDetails={setSelectedClub}
            />

          ))}

        </div>
      )}


      {/* CLUB DETAILS */}

      {selectedClub && (

        <div className="details">

          <h2>Club Details</h2>

          <h3>{selectedClub.name}</h3>

          <p>
            <b>Category:</b> {selectedClub.category}
          </p>

          <p>
            {selectedClub.description}
          </p>

          <button
            onClick={() => setSelectedClub(null)}
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
}

export default App;