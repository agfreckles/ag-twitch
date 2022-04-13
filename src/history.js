import { useNavigate, useParams } from "react-router-dom";

//helper function to wrap component with useNavigate

const withNavigate = (Component) => (props) => {
  const navigate = useNavigate();
  const params = useParams();
  return <Component {...props} navigate={navigate} params={params} />;
};
export default withNavigate;
