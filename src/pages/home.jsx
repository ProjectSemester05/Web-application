import { React,useEffect } from "react";
import { Flex} from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import { getUser } from "../utils/amplifyConf";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions/userActions";
import { getName } from "../utils/helper";
import CatalogueContainer from "../containers/catalogue_container";
import RecentDeadlines from "../containers/recent_deadlines";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let result = {};
    async function fetchUser() {
      result = await getUser();
      if (result.success && result.result) {
        if (result.result.hasOwnProperty("attributes")) {
          let user = result.result.attributes;
          let name = getName(user.name);
          dispatch(
            setUserInfo({
              email: user.email,
              firstName: name.firstName,
              lastName: name.lastName,
              provider: user.hasOwnProperty("identities"),
            })
          );
        }
      }
    }
    fetchUser();
  }, []);

  return (
    <Flex flexDirection="column">
      <Header signed={true} />
      <RecentDeadlines/>
      <CatalogueContainer/>
      <Footer />
    </Flex>
  );
};

export default HomePage;
