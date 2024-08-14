import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";


const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const movieCollection =collection(db, "movies");

  const getMovieDataFormFireStore = onSnapshot(movieCollection, (snapshot) => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    snapshot.docs.forEach((doc) => {
      // console.log(recommends);
      switch (doc.data().type) {
        case 'recommend':
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;
        case 'new':
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;
        case 'original':
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;
        case 'trending':
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;
      };

      dispatch(setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      }));
    });
  });

  useEffect(() => getMovieDataFormFireStore, [userName]);

  // 아래 주석은 왜 안되는지 잘 모르겠으나..일단 이렇게 냅두자..
  // let recommends = [];
  // let newDisneys = [];
  // let originals = [];
  // let trending = [];

  
  // useEffect(() => {
  //   db.collection('movies').onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       switch(doc.data().type) {
  //         case 'recommend' :
  //           recommends = [...recommends, {id : doc.id, ...doc.data()}]
  //           break;
  //         case 'new' :
  //           newDisneys = [...newDisneys, {id : doc.id, ...doc.data()}]
  //           break;
  //         case 'original' :
  //           originals = [...originals, {id : doc.id, ...doc.data()}]
  //           break;
  //         case 'trending' :
  //           trending = [...trending, {id : doc.id, ...doc.data()}]
  //           break;
  //       }
  //     });
  //   });

  //   dispatch(setMovies({
  //     recommend : recommends,
  //     newDisney : newDisneys,
  //     original : originals,
  //     trending : trending,
  //   }));
  // },[userName]);  

  
  return(
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  
  &:after {
    background : url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;