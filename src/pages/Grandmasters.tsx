/**
 * Team Component for En Passant Chess Forum, ABESEC
 * Displays the team for the 2025-26 tenure with real profile pictures.
 */

import { FaChessKing } from "react-icons/fa";

/**
 * Interface for team member data structure.
 */
interface TeamMember {
  id: string;
  name: string;
  post: string;
  description: string;
  avatar: string; // path from /public
}

const ChessTeamPage = () => {
  /**
   * Team members data for the 2025-26 tenure.
   */
  const teamMembers: TeamMember[] = [
    { id: "prezz", name: "Prem", post: "The Prezz", description: "Guiding the club's every move.", avatar: "/assets/images/6.png" },
    { id: "vice-prezz", name: "Naina", post: "Vice Prezz", description: "The king's most trusted advisor.", avatar: "/assets/images/5.png" },
    { id: "treasurer", name: "Priyanshu", post: "The Treasurer", description: "Guarding the treasury with precision.", avatar: "/assets/images/7.png" },
    { id: "design-head", name: "Ayush", post: "Design Head", description: "Crafting our visual checkmate style.", avatar: "/assets/images/1.png" },
    { id: "media-head", name: "Priyansh", post: "Media Head", description: "Broadcasting our brilliant every move.", avatar: "/assets/images/2.png" },
    { id: "promotion-head", name: "Ishita ", post: "Promotion Head", description: "Recruiting our next grandmasters.", avatar: "/assets/images/4.png" },
    { id: "community-head", name: "Abhinav", post: "Community Head", description: "Building our strong, united kingdom.", avatar: "/assets/images/8.jpg" },
    { id: "event-head", name: "Divyansh S", post: "Event Head", description: "Orchestrating our epic chess battles.", avatar: "/assets/images/3.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-lato">
      <main className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-24">
          <p className="text-lg md:text-xl text-primary font-semibold mb-2">
            En Passant Chess Forum, ABESEC
          </p>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-900">
            The Tenure 2025-26 Begins!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Where every move matters, and every player becomes a strategist.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </section>

        {/* Team Grid Section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center flex flex-col"
              >
                {/* Profile image */}
                <div className="w-32 h-32 mx-auto mt-6 mb-4 rounded-full border-4 border-primary shadow-lg flex-shrink-0 overflow-hidden">
                <img
  src={member.avatar}
  alt={`${member.name} - ${member.post}`}
  className="w-full h-full object-cover object-top"
/>

                </div>

                <div className="p-6 pt-0 flex-grow flex flex-col justify-between min-h-[160px]">
                  <div>
                    <h2 className="font-montserrat text-2xl font-bold text-gray-900">
                      {member.name}
                    </h2>
                    <p className="text-primary text-lg font-semibold mt-1">
                      {member.post}
                    </p>
                    <p className="text-gray-500 text-sm mt-3 italic h-10">
                      "{member.description}"
                    </p>
                  </div>
                </div>

                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChessTeamPage;
