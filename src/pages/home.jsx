import React, {useState, useEffect, useCallback } from "react";
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

  const incrementLoading1 = () => {
    let newVal = loadingCounter1 + 1;
    setLoadingCounter1(newVal);
  }
  const incrementLoading2 = () => {
    let newVal = loadingCounter2 + 1;
    setLoadingCounter2(newVal);
  }
  const setUser = useCallback(
    (user,name) => {
      dispatch(
        setUserInfo({
          email: user.email,
          firstName: name.firstName,
          lastName: name.lastName,
          provider: user.hasOwnProperty("identities"),
        })
      );
    },
    [],
  )

  useEffect(() => {
    let result = {};
    async function fetchUser() {
      result = await getUser();
      if (result.success && result.result) {
        if (result.result.hasOwnProperty("attributes")) {
          let user = result.result.attributes;
          let name = getName(user.name);
          setUser(user,name);
        }
      }
    }
    fetchUser();
  }, [setUser]);

  return (
    <Flex flexDirection="column" overflow={loadingCounter1+loadingCounter2 ===2 ? "auto":"hidden"} maxH={loadingCounter1+loadingCounter2 ===2 ? "auto":"100vh"}>
      {loadingCounter1 + loadingCounter2 < 2 && <Loader/>}
      <Header signed={true} />
      <RecentDeadlines increment = {incrementLoading1}/>
      <CatalogueContainer increment={incrementLoading2}/>
      <Footer />
    </Flex>
  );
};

export default HomePage;
