import React, {useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import { getUser } from "../utils/amplifyConf";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/actions/userActions";
import { getName } from "../utils/helper";
import CatalogueContainer from "../containers/catalogue_container";
import RecentDeadlines from "../containers/recent_deadlines";
import Loader from "../components/loader"
const HomePage = () => {

  const dispatch = useDispatch();
  const [loadingCounter1, setLoadingCounter1] = useState(0);
  const [loadingCounter2, setLoadingCounter2] = useState(0);
  const [over, setOver] = useState("hidden");

  const incrementLoading1 = () => {
    console.log("called1 ")
    let newVal = loadingCounter1 + 1;
    setLoadingCounter1(newVal);
    if(newVal + loadingCounter2==2){
     setOver("auto")
    }
    console.log(newVal);
    console.log(loadingCounter1);
  }
  const incrementLoading2 = () => {
    console.log("called2 ")
    let newVal = loadingCounter2 + 1;
    if(newVal + loadingCounter1==2){
      setOver("auto")
     }
    setLoadingCounter2(newVal);
    console.log(newVal);
    console.log(loadingCounter2);
  }

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
      {loadingCounter1 + loadingCounter2 < 2 && <Loader/>}
      <Header signed={true} />
      <RecentDeadlines increment = {incrementLoading1}/>
      <CatalogueContainer increment={incrementLoading2}/>
      <Footer />
    </Flex>
  );
};

export default HomePage;
