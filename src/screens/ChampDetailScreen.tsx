import "../styles/ChampDetailScreen.css";

const ChampDetailScreen = ({}) => {
  const generalDiv = {
    backgroundColor: "#17171B",
    width: "80%",
    height: "92vh",
    margin: "4vh auto",
    display: "flex",
    flexDirection: "column" as "column",
  };

  const champDetailDiv = {
    borderRadius: 10,
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    width: "24%",
  };

  const goBackDiv = {
    backgroundColor: "#27272D",
    height: "7%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const champInfoDiv = {
    backgroundColor: "#27272D",
    height: "72%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-evenly",
  };

  const champStatsDiv = {
    backgroundColor: "#27272D",
    width: "100%",
    height: "19%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-evenly",
  };

  const champInfoSkinsDiv = {
    backgroundColor: "#27272D",
    marginLeft: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column" as "column",
    padding: "20px 20px 0 20px",
    width: "74%",
  };

  const champSkinDiv = {
    backgroundColor: "#17171B",
    height: "75%",
    borderRadius: 10,
    marginBottom: 10,
  };

  const carouselInner = {
    width: "100%",
    height: "25%",
    borderRadius: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    alignSelf: "center",
  };

  const carouselItem = {
    backgroundColor: "#17171B",
    width: "21%",
    height: "100%",
    borderRadius: 10,
  };

  const generalSpellsDiv = {
    backgroundColor: "#27272D",
    padding: "15px 0",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "space-evenly",
    color: "white",
    fontSize: 16,
    fontWeight: "semibold" as "semibold",
    flexDirection: "column" as "column",
    height: "30%",
  };

  const champCarrusellDiv = {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-evenly",
    height: "80%",
  };

  const champCarrusellSpellDiv = {
    backgroundColor: "#17171B",
    width: "20%",
    borderRadius: 10,
  };

  return (
    <div style={generalDiv}>
      <div
        style={{
          display: "flex",
          height: "70%",
          justifyContent: "space-between",
        }}
      >
        <div style={champDetailDiv}>
          <div style={goBackDiv}> Go back </div>
          <div style={champInfoDiv}>
            <h2
              style={{
                alignSelf: "center",
                paddingTop: 20,
                fontWeight: "bold",
              }}
            >
              Bard
            </h2>
            <p style={{ alignSelf: "center" }}>The Wandering Caretaker</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "35%",
                  height: "20%",
                  backgroundColor: "#17171B",
                }}
              ></div>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#17171B",
                }}
              ></div>
              <div
                style={{
                  width: "35%",
                  height: "20%",
                  backgroundColor: "#17171B",
                }}
              ></div>
            </div>

            <p
              style={{
                fontSize: 9,
                textAlign: "center",
                padding: "10px 25px 0 25px",
              }}
            >
              A traveler from beyond the stars, Bard is an agent of serendipity
              who fights to maintain a balance where life can endure the
              indifference of chaos. Many Runeterrans sing songs that ponder his
              extraordinary nature, yet they all agree that the cosmic vagabond
              is drawn to artifacts of great magical power. Surrounded by a
              jubilant choir of helpful spirit meeps, it is impossible to
              mistake his actions as malevolent, as Bard always serves the
              greater good... in his own odd way.
            </p>

            <div
              style={{
                width: "82%",
                height: "10%",
                backgroundColor: "#17171B",
                borderRadius: 5,
                alignSelf: "center",
                marginBottom: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              001
            </div>
          </div>
          <div style={champStatsDiv}>
            <div
              style={{
                width: "83%",
                height: "40%",
                backgroundColor: "#17171B",
                borderRadius: 5,
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Tank
            </div>
            <div
              style={{
                width: "83%",
                height: "40%",
                backgroundColor: "#17171B",
                borderRadius: 5,
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Support
            </div>
          </div>
        </div>

        <div style={champInfoSkinsDiv}>
          <div style={champSkinDiv}></div>
          <div className="carousel" style={carouselInner}>
            <div style={{ display: "flex" }}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowLeftIcon"
                style={{ width: 35 }}
              >
                <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
              </svg>
            </div>
            <div className="carouselItem" style={carouselItem}></div>
            <div className="carouselItem" style={carouselItem}></div>
            <div className="carouselItem" style={carouselItem}></div>
            <div className="carouselItem" style={carouselItem}></div>

            <div style={{ display: "flex" }}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowRightIcon"
                style={{ width: 35 }}
              >
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={generalSpellsDiv}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "#17171B",
              width: "39%",
              height: 2,
              borderRadius: 10,
            }}
          ></div>
          <h4 style={{ fontSize: 20 }}>SPELLS</h4>
          <div
            style={{
              backgroundColor: "#17171B",
              width: "39%",
              height: 2,
              borderRadius: 10,
            }}
          ></div>
        </div>
        <div style={champCarrusellDiv}>
          <div style={champCarrusellSpellDiv}></div>
          <div style={champCarrusellSpellDiv}></div>
          <div style={champCarrusellSpellDiv}></div>
          <div style={champCarrusellSpellDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default ChampDetailScreen;

// @media screen and (max-width: 1430px) {
// p (bard info){
//   font-size: 10px;
// }

// @media screen and (max-width: 1250px) {
// p (bard info){
//   font-size: 9px;
// }
