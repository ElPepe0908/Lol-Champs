
 const ChampDetailScreen = ({}) => {

    const generalDiv = {
        backgroundColor: "#9798F4",
        width: "100%",
        height: 1000,
        marginLeft: 72,
        marginRight: 90,
        marginTop: 30,
         display: "flex",
            flexDirection: "row" as "row",
    }

    const champDetailDiv = {
        backgroundColor: "red",
        width: 350,
        height: 601,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column" as "column"
       
    }

    const goBackDiv = {
        backgroundColor: "#27272D",
        width: 350,
        height: 37,
        borderRadius: 10,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    }

    const champInfoDiv = {
        backgroundColor: "#27272D",
        width: 350,
        height: 428,
        borderRadius: 10,
        marginTop: 10,
    }
   
    const champStatsDiv = {
        backgroundColor: "#27272D",
        width: 350,
        height: 116,
        borderRadius: 10,
        marginTop: 10,

    }

    const champInfoSkinsDiv = {
        backgroundColor: "#27272D",
        width: 1300,
        height: 601,
        marginLeft: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column" as "column"
    }

    const champSkinDiv = {
        backgroundColor: "#fff",
        width: 1260,
        height: 414,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20,
        marginRigth: 20,
        marginBottom: 14,
    }

    const champSkinDiv2 = {
        backgroundColor: "#fff",
        width: 1300,
        height: 137,
        borderRadius: 10,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row" as "row",
    }

    const champSkinsCarousel = {
        backgroundColor: "#9798F4",
        width: 300,
        height: 137,
        borderRadius: 10,
        marginLeft: 20,
    }

    const generalSpellsDiv = {
        backgroundColor: "#27272D",
        width: 1660,
        height: 300,
        borderRadius: 10,
    }

  return (
   <div style={generalDiv}>

    <div style={champDetailDiv}>
        <div style={goBackDiv}> Go back </div>
        <div style={champInfoDiv}></div>
        <div style={champStatsDiv}></div>
    </div>

    <div style={champInfoSkinsDiv}>
        <div style={champSkinDiv}></div>
        <div style={champSkinDiv2}>
            <div style={champSkinsCarousel}></div>
            <div style={champSkinsCarousel}></div>
            <div style={champSkinsCarousel}></div>
            <div style={champSkinsCarousel}></div>
        </div>
    </div>

    <div style={generalSpellsDiv}></div>

   </div>
  )
}

export default ChampDetailScreen;

