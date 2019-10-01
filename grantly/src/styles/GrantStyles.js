import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";


// vars
const cardDetailsMargin = "10px";

const grantStyles = makeStyles(theme => ({
  
  grantCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "0.5rem",
    padding: "25px 10px",
    fontFamily: "Roboto"
  },
  grant_layout: {
    display: "flex",
    minHeight: "125px",
    justifyContent: "space-between",
    alignItems: "center"
  },
  grant_logo: {
    background: "#ddd",
    width: "70px",
    height: "60px"
  },
  grant_info: {
    alignSelf: "stretch",
    margin: "0 10px",
    color: "#696969"
  },
  grant_subinfo: {
    fontStyle: "italic"
  },
  grantName: {
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#222222"

    // border: "1px solid fuchsia"
  },
  bookmark: {
    alignSelf: "flex-start"
    // border: "1px solid fuchsia"
  },
  phantom: {
    // border: "1px solid fuchsia"
  },
  deadline: {
    margin: cardDetailsMargin
  },
  detailsHeader: {
    margin: "5px",
    fontWeight: "700",
    fontSize: "0.9rem"
  },
  amount: {
    margin: cardDetailsMargin
  },
  btn: {
    margin: "10px"
  },
  detailsWrapper: {
    display: "flex"
  }
}));

export default grantStyles;
