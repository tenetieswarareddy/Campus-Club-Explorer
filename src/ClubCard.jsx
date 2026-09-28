function ClubCard({ club, onViewDetails }) {

  return (
    <div className="club-card">

      <h2>{club.name}</h2>

      <p>
        <b>Category:</b> {club.category}
      </p>

      <p>
        {club.description}
      </p>

      <button
        onClick={() => onViewDetails(club)}
      >
        View Details
      </button>

    </div>
  );
}

export default ClubCard;