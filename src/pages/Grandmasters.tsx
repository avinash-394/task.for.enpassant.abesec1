import React, { useState } from 'react';

/**
 * Reusable interface for team member data structure.
 */
interface TeamMember {
  id: string;
  name: string;
  post: string;
  description: string;
  avatar: string;
}

// --- Professional Context Icons (Chess Themed) ---
// Self-contained, performant SVG icons for each professional role.

const KingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C10.16 2 8.5 3.66 8.5 5.5S10.16 9 12 9s3.5-1.66 3.5-3.5S13.84 2 12 2zm0 9c-2.43 0-4.42 1.94-4.5 4.36L4 18h16l-3.5-2.64C16.42 12.94 14.43 11 12 11z" /></svg>;
const QueenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 4l-3 11h18l-3-11H6zm11.5 13H6.5c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16h11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>;
const RookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M5 22h14v-2H5v2zm0-4h14v-2H5v2zm0-4h14V5H5v9zm2-7h10v5H7V7zM4 3h16v2H4z"/></svg>;
const BishopIcon = () => <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2L4 10v8h16v-8l-8-8zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>;
const KnightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2c-2.76 0-5 2.24-5 5v2.27c-1.47.47-2.5 1.83-2.5 3.48V18h15v-5.25c0-1.65-1.03-3.01-2.5-3.48V7c0-2.76-2.24-5-5-5z"/></svg>;
const PawnIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 6h4v5h-4zM8 15h8v2H8zM7 19h10v2H7z"/></svg>;
const CrownIcon = () => <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" /></svg>;


/**
 * ✅ MODIFIED RoleIcon Component
 * Displays a department/role-specific icon in a unique diamond-shaped "crest".
 */
const RoleIcon = ({ post }: { post: string }) => {
    const getIcon = () => {
        const lowerCasePost = post.toLowerCase();
        if (lowerCasePost.includes("prezz")) return <KingIcon />;
        if (lowerCasePost.includes("vice")) return <QueenIcon />;
        if (lowerCasePost.includes("treasurer")) return <RookIcon />;
        if (lowerCasePost.includes("design") || lowerCasePost.includes("media")) return <BishopIcon />;
        if (lowerCasePost.includes("event") || lowerCasePost.includes("promotion")) return <KnightIcon />;
        return <PawnIcon />; // Default icon
    };

    return (
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-card p-2.5 rounded-lg border-2 border-primary/50 shadow-lg transform rotate-45 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <div className="transform -rotate-45">
                 {getIcon()}
            </div>
        </div>
    );
};


/**
 * MODIFIED TeamMemberCard Component
 * Implements all visual, functional, and edge case requirements.
 */
const TeamMemberCard = React.memo(({ member }: { member: TeamMember }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div 
          className="group relative flex flex-col text-center bg-card rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
          style={{
            backgroundImage: 'linear-gradient(45deg, hsl(var(--border)/0.2) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--border)/0.2) 25%, transparent 25%)',
            backgroundSize: '20px 20px',
          }}
        >
            <div className="relative p-8 flex-grow flex flex-col items-center">
                <figure className="relative w-36 h-36 mx-auto mb-8"> {/* ✅ Increased bottom margin for new icon */}
                    <div className="relative w-full h-full rounded-full border-4 border-primary/30 shadow-lg flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:scale-105">
                        {imageError ? (
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center font-montserrat text-4xl font-bold text-primary">
                                {getInitials(member.name)}
                            </div>
                        ) : (
                            <img
                                src={member.avatar}
                                alt={`${member.name} - ${member.post}`}
                                // ✅ FIX: Changed object-center to object-top to show the head
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        )}
                    </div>
                    {/* ✅ FIX: Renders the new, unique icon design */}
                    <RoleIcon post={member.post} />
                </figure>

                <div className="flex-grow flex flex-col justify-center">
                    <h2 className="font-montserrat text-2xl font-bold text-foreground">
                        {member.name}
                    </h2>
                    <p className="text-primary font-semibold mt-1">
                        {member.post}
                    </p>
                    <p 
                        className="text-muted-foreground text-sm mt-4 italic min-h-[3rem] px-2"
                    >
                        "{member.description}"
                    </p>
                </div>
            </div>
            
            <div className="w-0 h-1.5 bg-primary group-hover:w-full transition-all duration-500 ease-out mx-auto"></div>
        </div>
    );
});
TeamMemberCard.displayName = 'TeamMemberCard';


// --- This parent component remains unchanged as per instructions ---
const ChessTeamPage = () => {
  const teamMembers: TeamMember[] = [
    { id: "prezz", name: "Prem Singh", post: "The Prezz", description: "Guiding the club's every move.", avatar: "/assets/images/6.png" },
    { id: "vice-prezz", name: "Naina Srivastava", post: "Vice Prezz", description: "The king's most trusted advisor.", avatar: "/assets/images/5.png" },
    { id: "treasurer", name: "Priyanshu Jha", post: "The Treasurer", description: "Guarding the treasury with precision.", avatar: "/assets/images/7.png" },
    { id: "design-head", name: "Ayush Shakya", post: "Design Head", description: "Crafting our visual checkmate style.", avatar: "/assets/images/1.png" },
    { id: "media-head", name: "Priyansh Saxena", post: "Media Head", description: "Broadcasting our brilliant every move.", avatar: "/assets/images/2.png" },
    { id: "promotion-head", name: "Ishita ", post: "Promotion Head", description: "Recruiting our next grandmasters.", avatar: "/assets/images/4.png" },
    { id: "community-head", name: "Abhinav Anand", post: "Community Head", description: "Building our strong, united kingdom.", avatar: "/assets/images/8.jpg" },
    { id: "event-head", name: "Divyansh S", post: "Event Head", description: "Orchestrating our epic chess battles.", avatar: "/assets/images/3.png" },
  ];

  return (
    <>
      <style>{`
        .team-page-container {
          background-color: hsl(var(--background));
          background-image: radial-gradient(hsl(var(--border) / 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .title-gradient {
          background: linear-gradient(to right, hsl(var(--foreground)), hsl(var(--muted-foreground)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="min-h-screen text-foreground font-lato team-page-container">
        <main className="container mx-auto px-4 py-20 sm:py-28">
          <section className="text-center mb-20 sm:mb-24">
            <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
              <CrownIcon />
            </div>
            <h1 className="font-montserrat font-extrabold text-5xl sm:text-6xl md:text-7xl title-gradient">
              The King's Council
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the strategists and visionaries leading the charge for the 2025-26 tenure.
            </p>
          </section>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ChessTeamPage;