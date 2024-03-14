/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import {PropTypes}  from "react/prop-types";
import { connect } from "react-redux";
import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/structures/Navbar/Navbar";


const InfoView = ({ student }) => {
  return(
  <HomeTemplate>
    <div>Info</div>
    <Navbar />
  </HomeTemplate>
)};

//InfoView.propTypes = {
//  student: PropTypes.any.isRequired
//};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(InfoView);