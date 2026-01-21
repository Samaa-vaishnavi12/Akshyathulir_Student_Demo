import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faSliders } from "@fortawesome/free-solid-svg-icons";
import "./style/test.css";

/* ===== MUI IMPORTS ===== */
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Typography, Divider, Grid, Avatar } from "@mui/material";
// import VerifiedIcon from "@mui/icons-material/Verified";

/* ================= STAT CARD ================= */
const StatCard = ({ title, value }) => (
  <Paper sx={{ p: 2, textAlign: "center" }}>
    <Typography variant="h6">{value}</Typography>
    <Typography color="text.secondary">{title}</Typography>
  </Paper>
);

function Test() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [view, setView] = useState("LIST");

  const [filters, setFilters] = useState({
    domain: [],
    subdomain: [],
    mode: [],
    language: []
  });

  /* ================= OPTIONS ================= */
  const domains = [
    { label: "Artificial Intelligence", value: "ai" },
    { label: "Data Science & Analytics", value: "data" },
    { label: "Web Development", value: "web" },
    { label: "Cloud Computing", value: "cloud" },
    { label: "Cyber Security", value: "cyber" },
    { label: "UI / UX Design", value: "uiux" },
    { label: "Digital Marketing", value: "marketing" }
  ];

  const subdomains = [
    { label: "Machine Learning", value: "ml" },
    { label: "Deep Learning", value: "dl" },
    { label: "Full Stack", value: "fullstack" },
    { label: "DevOps", value: "devops" },
    { label: "AWS", value: "aws" },
    { label: "SEO", value: "seo" },
    { label: "UI Design", value: "ui" }
  ];

  const languages = [
    { label: "English", value: "english" },
    { label: "Hindi", value: "hindi" },
    { label: "Tamil", value: "tamil" },
    { label: "Malayalam", value: "malayalam" }
  ];

  const modes = [
    { label: "Online", value: "online" },
    { label: "Offline", value: "offline" }
  ];

  /* ================= EXPERT DATA ================= */
  const experts = [
    {
      name: "Samaa Vaishnavi",
      skill: "AI & Machine Learning",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: "★★★★★ 4.6",
      classes: "ai ml online english",
      featured: true
    },
    {
      name: "Ajay Kumar",
      skill: "Full Stack Web Development",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      rating: "★★★★★ 4.8",
      classes: "web fullstack offline hindi",
      featured: true
    },
    {
      name: "Ananya Sharma",
      skill: "Data Science & Analytics",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: "★★★★☆ 4.5",
      classes: "data dl online english",
      featured: false
    },
    {
      name: "Arjun Mehta",
      skill: "Cloud & DevOps Engineer",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: "★★★★★ 4.9",
      classes: "cloud aws devops online english",
      featured: true
    },
    {
      name: "Priya Nair",
      skill: "Cyber Security Specialist",
      img: "https://randomuser.me/api/portraits/women/52.jpg",
      rating: "★★★★★ 4.7",
      classes: "cyber offline malayalam",
      featured: true
    },
    {
      name: "Neha Verma",
      skill: "Digital Marketing Expert",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      rating: "★★★★☆ 4.4",
      classes: "marketing seo online english",
      featured: false
    }
  ];

  const featuredExperts = experts.filter(e => e.featured);

  /* ================= FILTER LOGIC ================= */
  const filteredExperts = experts.filter(e => {
    const cls = e.classes.split(" ");
    return (
      (filters.domain.length === 0 || filters.domain.some(d => cls.includes(d))) &&
      (filters.subdomain.length === 0 || filters.subdomain.some(s => cls.includes(s))) &&
      (filters.mode.length === 0 || filters.mode.some(m => cls.includes(m))) &&
      (filters.language.length === 0 || filters.language.some(l => cls.includes(l)))
    );
  });

  const expertsToShow = selectedExpert ? [selectedExpert] : filteredExperts;

  /* ================= PROFESSIONAL DETAILS PAGE ================= */
  if (view === "DASHBOARD" && selectedExpert) {
    return (
      <Box sx={{ p: 4, bgcolor: "#f4fbf3", minHeight: "100vh" }}>
        <Paper sx={{ p: 4, mt: 3 }}>
          {/* BACK BUTTON INSIDE DETAILS */}
          <Button
            variant="contained"
            sx={{ mb: 2, backgroundColor: "#2e7d32" }}
            onClick={() => {
              setView("LIST");
              setSelectedExpert(null);
            }}
          >
            ← Back to Experts
          </Button>

          {/* DETAILS HEADER */}
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            <Avatar
              src={selectedExpert.image}
              alt={selectedExpert.name}
              sx={{ width: 160, height: 160, border: "4px solid #2e7d32" }}
            />
            <Box>
              <Typography variant="h4" sx={{ color: "#2e7d32" }}>
                {selectedExpert.name}{" "}
                {/* <VerifiedIcon color="success" sx={{ verticalAlign: "middle" }} /> */}
              </Typography>
              <Typography color="success.main" sx={{ fontWeight: "bold" }}>
                {selectedExpert.expertise}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <b>Mode:</b> {selectedExpert.mode}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StatCard title="Experience" value="5+ Years" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Sessions" value="300+" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Rate" value="₹1500/hr" />
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            About Expert
          </Typography>
          <Typography sx={{ mt: 1, color: "text.secondary" }}>
            This expert has a strong experience in the field with deep domain knowledge and
            hands-on practical training. Suitable for both beginners and advanced learners.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            What You Get
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography>- Personalized learning plan</Typography>
            <Typography>- Practical project-based training</Typography>
            <Typography>- Doubt clearing sessions</Typography>
            <Typography>- Resume & Interview guidance</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: "#2e7d32" }}>
              Book Session
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#2e7d32", color: "#2e7d32" }}>
              Chat Now
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

  /* ================= ORIGINAL UI ================= */
  return (
    <>
      {/* TOP EXPERTS CAROUSEL */}
      <div className="featured-section">
        <h3>
          <FontAwesomeIcon icon={faLaptopCode} /> Top Rated Industry Experts
        </h3>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...featuredExperts, ...featuredExperts].map((e, i) => (
              <div
                key={i}
                className="featured-card"
                onClick={() => setSelectedExpert(e)}
              >
                <img src={e.img} alt={e.name} />
                <div className="featured-text">
                  <strong>{e.name}</strong>
                  <span>{e.skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* FILTERS */}
        <div className="filters">
          <h3>
            <FontAwesomeIcon icon={faSliders} /> Filters
          </h3>

          <Autocomplete
            multiple
            options={domains}
            getOptionLabel={o => o.label}
            onChange={(e, v) =>
              setFilters(p => ({ ...p, domain: v.map(i => i.value) }))
            }
            renderInput={p => <TextField {...p} label="Domain" />}
          />

          <Autocomplete
            multiple
            options={subdomains}
            getOptionLabel={o => o.label}
            onChange={(e, v) =>
              setFilters(p => ({ ...p, subdomain: v.map(i => i.value) }))
            }
            renderInput={p => <TextField {...p} label="Subdomain" />}
          />

          <Autocomplete
            multiple
            options={modes}
            getOptionLabel={o => o.label}
            onChange={(e, v) =>
              setFilters(p => ({ ...p, mode: v.map(i => i.value) }))
            }
            renderInput={p => <TextField {...p} label="Mode" />}
          />

          <Autocomplete
            multiple
            options={languages}
            getOptionLabel={o => o.label}
            onChange={(e, v) =>
              setFilters(p => ({ ...p, language: v.map(i => i.value) }))
            }
            renderInput={p => <TextField {...p} label="Language" />}
          />
        </div>

        {/* PROFILES */}
        <div className="profiles">
          {/* BACK BUTTON ABOVE PROFILE */}
{(selectedExpert || filteredExperts.length !== experts.length) && (
  <div style={{ gridColumn: "1 / -1", marginBottom: "8px" }}>
    <button
      className="back-btn"
      onClick={() => {
        setSelectedExpert(null);
        setFilters({
          domain: [],
          subdomain: [],
          mode: [],
          language: []
        });
      }}
    >
      ← Back to All Experts
    </button>
  </div>
)}

          {expertsToShow.length === 0 ? (
            <p style={{ padding: "20px", fontWeight: "bold" }}>
              Currently no experts available
            </p>
          ) : (
            expertsToShow.map((e, i) => (
              <div key={i} className="profile highlight">
                <img src={e.img} alt={e.name} />
                <h4>{e.name}</h4>
                <span>{e.skill}</span>
                <div className="rating">{e.rating}</div>
                <div className="btn-group">
                  <button className="book">Book</button>
                  <button
                    className="more"
                    onClick={() => {
                      setSelectedExpert({
                        ...e,
                        image: e.img,
                        expertise: e.skill,
                        mode: e.classes.includes("online")
                          ? "Online"
                          : "Offline"
                      });
                      setView("DASHBOARD");
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Test;
